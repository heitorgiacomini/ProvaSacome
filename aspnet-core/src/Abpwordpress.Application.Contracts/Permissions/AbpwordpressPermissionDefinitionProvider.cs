using Abpwordpress.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Abpwordpress.Permissions;

public class AbpwordpressPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AbpwordpressPermissions.GroupName);

		var permissionsContent = myGroup.AddPermission(AbpwordpressPermissions.Content.Default, L("Permissions:Content"));
		permissionsContent.AddChild(AbpwordpressPermissions.Content.Create, L("Permissions:Content.Create"));
		permissionsContent.AddChild(AbpwordpressPermissions.Content.Edit, L("Permissions:Content.Edit"));
		permissionsContent.AddChild(AbpwordpressPermissions.Content.Delete, L("Permissions:Content.Delete"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(AbpwordpressPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AbpwordpressResource>(name);
    }
}
