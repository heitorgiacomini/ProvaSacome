using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Abpwordpress.Contracts;
using Abpwordpress.Entities;
using Abpwordpress.Permissions;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Abpwordpress.ControllersS
{

    public class ContentController : BaseOdataController<Content, Guid, ContentDto>
    {
        private readonly IRepository<Content, Guid> _stateRepository;
        private readonly IMapper _mapper;

        public ContentController(IRepository<Content, Guid> stateRepository, IMapper mapper)
            : base(stateRepository, mapper)
        {
        }

        [Authorize(Policy = AbpwordpressPermissions.Content.Default)]
        public override Task<IActionResult> Get()
        {
            return base.Get();
        }
    }
}