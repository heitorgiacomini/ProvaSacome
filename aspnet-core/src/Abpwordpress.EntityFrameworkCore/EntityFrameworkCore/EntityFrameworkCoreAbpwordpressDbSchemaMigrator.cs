using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Abpwordpress.Data;
using Volo.Abp.DependencyInjection;

namespace Abpwordpress.EntityFrameworkCore;

public class EntityFrameworkCoreAbpwordpressDbSchemaMigrator
    : IAbpwordpressDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreAbpwordpressDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the AbpwordpressDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AbpwordpressDbContext>()
            .Database
            .MigrateAsync();
    }
}
