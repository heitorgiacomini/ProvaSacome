using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Abpwordpress.Entities;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Abpwordpress.EntityFrameworkCore.Mappings
{
    public class ContentMap : IEntityTypeConfiguration<Content>
    {
        public void Configure(EntityTypeBuilder<Content> t)
        {

            t.ToTable(AbpwordpressConsts.DbTablePrefix + nameof(Content), AbpwordpressConsts.DbSchema);
            t.ConfigureByConvention();

            t.Ignore(p => p.ExtraProperties);
        }



    }
}
