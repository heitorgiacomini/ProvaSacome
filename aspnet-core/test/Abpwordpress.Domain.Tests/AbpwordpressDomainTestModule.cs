using Volo.Abp.Modularity;

namespace Abpwordpress;

[DependsOn(
    typeof(AbpwordpressDomainModule),
    typeof(AbpwordpressTestBaseModule)
)]
public class AbpwordpressDomainTestModule : AbpModule
{

}
