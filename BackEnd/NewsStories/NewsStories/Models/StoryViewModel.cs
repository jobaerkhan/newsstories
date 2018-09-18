using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.Models
{
    public class StoryViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedDate { get; set; }
    }
}