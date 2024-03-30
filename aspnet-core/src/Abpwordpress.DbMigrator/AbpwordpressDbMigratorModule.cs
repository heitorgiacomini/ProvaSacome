using Abpwordpress.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Abpwordpress.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpwordpressEntityFrameworkCoreModule),
    typeof(AbpwordpressApplicationContractsModule)
    )]
public class AbpwordpressDbMigratorModule : AbpModule
{
}
