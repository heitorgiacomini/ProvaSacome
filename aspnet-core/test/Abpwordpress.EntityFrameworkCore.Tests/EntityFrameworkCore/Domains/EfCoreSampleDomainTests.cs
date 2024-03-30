using Abpwordpress.Samples;
using Xunit;

namespace Abpwordpress.EntityFrameworkCore.Domains;

[Collection(AbpwordpressTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<AbpwordpressEntityFrameworkCoreTestModule>
{

}
