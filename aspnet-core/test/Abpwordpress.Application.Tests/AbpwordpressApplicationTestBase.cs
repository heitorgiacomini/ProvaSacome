using Volo.Abp.Modularity;

namespace Abpwordpress;

public abstract class AbpwordpressApplicationTestBase<TStartupModule> : AbpwordpressTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
