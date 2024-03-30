using AutoMapper;
using AutoMapper.QueryableExtensions;
using IdentityModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Query.Wrapper;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.OData.Edm;
using Microsoft.OData.UriParser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
namespace Abpwordpress
{
    public abstract class BaseOdataController<TEntity, TIDTYPE, TDto> : ODataController
        where TEntity : class, IEntity<TIDTYPE>
    {
        private readonly IRepository<TEntity, TIDTYPE> _repository;
        private readonly IMapper _mapper;

        public BaseOdataController(IRepository<TEntity, TIDTYPE> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet()]
        public virtual async Task<IActionResult> Get()
        {
            try
            {
                IEdmModel model = GetEdm.GetEdmModels();
                IEdmEntitySet entitySet = model.EntityContainer.FindEntitySet(typeof(TEntity).Name);

                var odataQueryContext = new ODataQueryContext(model, typeof(TEntity), new ODataPath(new EntitySetSegment(entitySet)));

                ODataQueryOptions<TEntity> options = new ODataQueryOptions<TEntity>(odataQueryContext, Request);

                var queryable = await _repository.GetQueryableAsync();

                var totalCount = options.Count?.GetEntityCount(options.Filter?.ApplyTo(queryable, new ODataQuerySettings()) ?? queryable);

                var queried = options.ApplyTo(queryable);
                var elementType = queried.ElementType;

                if (typeof(ISelectExpandWrapper).IsAssignableFrom(elementType))
                {
                    var jsonOptions = new JsonSerializerOptions
                    {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles
                    };

                    List<TDto> dtoList = new List<TDto>();
                    foreach (var item in queried)
                    {
                        var entityProperty = item.GetType().GetProperty("Instance");
                        var entity = (TEntity)entityProperty.GetValue(item);
                        var dto = _mapper.Map<TDto>(entity);
                        dtoList.Add(dto);
                    }
                    var odataReturn = new OdataReturn<TDto>(totalCount, dtoList);
                    return Ok(odataReturn);
                }
                else
                {
                    var entityQueryable = queried.Cast<TEntity>();

                    IQueryable<TDto> iquerydto = entityQueryable.ProjectTo<TDto>(_mapper.ConfigurationProvider);
                    var dtoList = iquerydto.ToList();
                    var odataReturn = new OdataReturn<TDto>(totalCount, dtoList);
                    return Ok(odataReturn);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
     
}
