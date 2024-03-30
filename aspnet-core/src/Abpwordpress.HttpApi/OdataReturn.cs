using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Abpwordpress
{
    public class OdataReturn<T>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ODataListResult{T}"/> class.
        /// </summary>
        /// <param name="totalcount">totalcount.</param>
        /// <param name="value">value.</param>
        public OdataReturn(long? totalcount, List<T> value)
        {
            this.Totalcount = totalcount;
            this.Value = value;
        }

        /// <summary>
        /// Gets or Sets Totalcount.
        /// </summary>
        [JsonPropertyName("@odata.count")]
        public long? Totalcount { get; set; }

        /// <summary>
        /// Gets or Sets Value.
        /// </summary>
        [JsonPropertyName("value")]
        public List<T> Value { get; set; }
    }
}
