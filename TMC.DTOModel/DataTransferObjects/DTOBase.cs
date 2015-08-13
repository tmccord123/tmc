using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
 

namespace TMC.Shared
{
    public class DTOBase 
    {
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool IsActive;
 
    }
}
