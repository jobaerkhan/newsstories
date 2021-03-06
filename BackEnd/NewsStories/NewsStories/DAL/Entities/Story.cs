﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Entities
{
    public class Story
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedDate { get; set; }
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

    }
}
