namespace Abpwordpress.Permissions;

public static class AbpwordpressPermissions
{
    public const string GroupName = "Abpwordpress";
    
    public static class Content
    {
        public const string Default = GroupName + ".Content";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }


    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";
}
