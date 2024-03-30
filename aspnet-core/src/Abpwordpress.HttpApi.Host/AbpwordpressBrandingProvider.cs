using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Abpwordpress;

[Dependency(ReplaceServices = true)]
public class AbpwordpressBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Abpwordpress";
}
