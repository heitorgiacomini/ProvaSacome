using System;
using System.ComponentModel.DataAnnotations;

namespace Abpwordpress.Contracts
{
    public class CreateUpdateContentDto
    {

                public String Title { get; set; }
    
                public string Body { get; set; }
        }
}

