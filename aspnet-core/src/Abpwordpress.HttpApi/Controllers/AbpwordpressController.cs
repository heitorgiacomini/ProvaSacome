using Abpwordpress.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Abpwordpress.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class AbpwordpressController : AbpControllerBase
{
    protected AbpwordpressController()
    {
        LocalizationResource = typeof(AbpwordpressResource);
    }
}
