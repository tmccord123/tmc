using TMC.Shared;

namespace TMC.Shared
{
    using System.Collections.Generic;

    /// <summary>
    /// Contract for Action DTO.
    /// </summary>
    public class BlogDTO : DTOBase, IBlogDTO
    {
        /// <summary>
        /// Get or set Action Id.
        /// </summary>
        public string BlogId { get; set; }  
        
        /// <summary>
        /// Get or set Action Id.
        /// </summary>
        public int ProductId { get; set; }

        /// <summary>
        /// Get or set Action Name.
        /// </summary>
        public string WebURL { get; set; }

        /// <summary>
        /// Get or set Description.
        /// </summary>
        public string Description { get; set; }

       
    }
}
