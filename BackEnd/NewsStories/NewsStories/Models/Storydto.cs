using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using NewsStories.DAL.Entities;

namespace NewsStories.Models
{
    public class Storydto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedDate { get; set; }
        public int UserId { get; set; }
        public String UserName { get; set; }

        //public Storydto(Story story)
        //{
        //    Id = story.Id;
        //    Title = story.Title;
        //    Body = story.Body;
        //    PublishedDate = story.PublishedDate;
        //    if (story.User != null)
        //    {
        //        User = new Userdto(story.User);
        //    }
        //}
    }
}