using AutoMapper;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace Abpwordpress.Entities
{
    public class ContentManager : DomainService
    {

        private readonly IMapper _mapper;

        public ContentManager(IMapper mapper)
        {
            _mapper = mapper;
        }

         

    }
}

