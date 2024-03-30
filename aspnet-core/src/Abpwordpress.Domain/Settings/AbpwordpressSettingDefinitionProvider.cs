using Volo.Abp.Settings;

namespace Abpwordpress.Settings;

public class AbpwordpressSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(AbpwordpressSettings.MySetting1));
    }
}
