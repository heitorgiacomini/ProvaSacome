using System.ComponentModel.DataAnnotations.Schema;
using System;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Abpwordpress.Entities
{
    public class BaseClass : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        [NotMapped]
        public override ExtraPropertyDictionary ExtraProperties { get => base.ExtraProperties; protected set => base.ExtraProperties = value; }
        public Guid? TenantId { get; set; }
    }
}