using System;
using System.Collections.Generic;
using System.Text;
using Abpwordpress.Localization;
using Volo.Abp.Application.Services;

namespace Abpwordpress;

/* Inherit your application services from this class.
 */
public abstract class AbpwordpressAppService : ApplicationService
{
    protected AbpwordpressAppService()
    {
        LocalizationResource = typeof(AbpwordpressResource);
    }
}
