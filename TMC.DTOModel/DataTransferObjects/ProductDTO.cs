using System;
using TMC.Shared;

namespace TMC.Shared
{
    using System.Collections.Generic;

    /// <summary>
    /// Contract for Action DTO.
    /// </summary>
    public class ProductDTO //: DTOBase , IProductDTO
    {
        /// <summary>
        /// Get or set Action Id.
        /// </summary>
        public int ProductId { get; set; }  
        
        /// <summary>
        /// Get or set Action Id.
        /// </summary>
        public string  Name { get; set; }

        public string SeoTitle { get; set; }
        /// <summary>
        /// Get or set Action Name.
        /// </summary>
        public string SiteURL { get; set; }

        public string ImageURL { get; set; }

        /// <summary>
        /// Get or set Description.
        /// </summary>
        public string Description { get; set; }

        public string Content { get; set; }
        public string ContentText { get; set; }

  

        /// <summary>
        /// gets or sets the state of the object.
        /// </summary>
        /// <value>The state of the object.</value>        
        public ObjectStateType ObjectState { get; set; }

        /// <summary>
        /// gets the unique ID.
        /// </summary>
        /// <value>The unique ID.</value>        
        public Guid? UniqueID { get; set; }
       
    }
}
