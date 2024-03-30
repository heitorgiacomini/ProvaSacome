using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Abpwordpress.Data;

/* This is used if database provider does't define
 * IAbpwordpressDbSchemaMigrator implementation.
 */
public class NullAbpwordpressDbSchemaMigrator : IAbpwordpressDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
