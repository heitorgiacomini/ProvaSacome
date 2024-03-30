using Abpwordpress.Contracts;
using Abpwordpress.Entities;
using AutoMapper;

namespace Abpwordpress;

public class AbpwordpressApplicationAutoMapperProfile : Profile
{
    public AbpwordpressApplicationAutoMapperProfile()
    {

        CreateMap<Content, ContentDto>();
        CreateMap<CreateUpdateContentDto, Content>();
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
    }
}
