using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace Abpwordpress.Contracts
{
    public class ContentDto : FullAuditedEntityDto<Guid>
    {
        [MaxLength(100)]
        public String Title { get; set; }
        [MaxLength(2000)]
        public string Body { get; set; }
    }
}
