using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Abpwordpress.Entities;
using Abpwordpress.Contracts;
using System;
using Abpwordpress.Permissions;
using Volo.Abp;
using System.Threading.Tasks;

namespace Abpwordpress.Services
{
    [Authorize(AbpwordpressPermissions.Content.Default)]
    public class ContentAppService : CrudAppService<Content, ContentDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateContentDto, CreateUpdateContentDto>, ICrudAppService<ContentDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateContentDto, CreateUpdateContentDto>
    {
        public ContentAppService(IRepository<Content, Guid> repository) : base(repository)
        {
            GetPolicyName = AbpwordpressPermissions.Content.Default;
            GetListPolicyName = AbpwordpressPermissions.Content.Default;
            CreatePolicyName = AbpwordpressPermissions.Content.Create;
            CreatePolicyName = AbpwordpressPermissions.Content.Create;
            UpdatePolicyName = AbpwordpressPermissions.Content.Edit;
            DeletePolicyName = AbpwordpressPermissions.Content.Delete;
        }

        [RemoteService(false)]
        public override Task<PagedResultDto<ContentDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            return base.GetListAsync(input);
        }
    }
}
