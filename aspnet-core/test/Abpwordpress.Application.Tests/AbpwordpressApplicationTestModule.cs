using Volo.Abp.Modularity;

namespace Abpwordpress;

[DependsOn(
    typeof(AbpwordpressApplicationModule),
    typeof(AbpwordpressDomainTestModule)
)]
public class AbpwordpressApplicationTestModule : AbpModule
{

}
