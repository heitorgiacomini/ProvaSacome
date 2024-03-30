using Abpwordpress.Entities;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace Abpwordpress
{
    public static class GetEdm
    {
        public static IEdmModel GetEdmModels()
        {
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<Content>(nameof(Content)).EntityType.HasKey(w => w.Id);
            return builder.GetEdmModel();
        }
    }
}
