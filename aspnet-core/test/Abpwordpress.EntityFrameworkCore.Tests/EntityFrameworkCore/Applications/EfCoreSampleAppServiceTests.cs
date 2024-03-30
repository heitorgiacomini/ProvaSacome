using Abpwordpress.Samples;
using Xunit;

namespace Abpwordpress.EntityFrameworkCore.Applications;

[Collection(AbpwordpressTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<AbpwordpressEntityFrameworkCoreTestModule>
{

}
