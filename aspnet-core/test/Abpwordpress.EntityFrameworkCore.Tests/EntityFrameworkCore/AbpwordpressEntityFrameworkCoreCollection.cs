using Xunit;

namespace Abpwordpress.EntityFrameworkCore;

[CollectionDefinition(AbpwordpressTestConsts.CollectionDefinitionName)]
public class AbpwordpressEntityFrameworkCoreCollection : ICollectionFixture<AbpwordpressEntityFrameworkCoreFixture>
{

}
