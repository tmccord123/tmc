namespace TMC.Shared
{
    using System.Collections.Generic;

    /// <summary>
    /// Contract for Action DTO.
    /// </summary>
    public class ProductDTO : DTOBase
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
       
    }
}
