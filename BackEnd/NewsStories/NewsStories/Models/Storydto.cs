using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NewsStories.Models
{
    public class Storydto
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedDate { get; set; }
    }
}