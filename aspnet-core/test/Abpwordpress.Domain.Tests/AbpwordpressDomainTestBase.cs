using Volo.Abp.Modularity;

namespace Abpwordpress;

/* Inherit from this class for your domain layer tests. */
public abstract class AbpwordpressDomainTestBase<TStartupModule> : AbpwordpressTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
