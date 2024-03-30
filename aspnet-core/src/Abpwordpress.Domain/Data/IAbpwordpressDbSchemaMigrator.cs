using System.Threading.Tasks;

namespace Abpwordpress.Data;

public interface IAbpwordpressDbSchemaMigrator
{
    Task MigrateAsync();
}
