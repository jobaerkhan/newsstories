namespace NewsStories.Migrations
{
    using NewsStories.DAL.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NewsStories.DAL.NewsDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(NewsStories.DAL.NewsDbContext context)
        {
            var user = new User
            {
                UserId = 1,
                UserName = "Jobaer",
                Password = "hello",
                Email = "jobaer@gmail.com"
            };
            context.User.AddOrUpdate(user);

            foreach(var st in context.Story)
            {
                st.UserId = user.UserId;
            }

            var stories = new List<Story>
            {
                new Story {
                           Title = "APIs.json Is An Index For API Operations",
                           Body = "As part of the latest wave of work around the APIs.json format We wanted to take " +
                           "some time to help folks better understand exactly what APIs.json is, and what it can " +
                           "do for API providers, consumers, as well as the fast moving API sector. We are working on " +
                           "version 0.16 of the API discovery format, and we wanted to help get the word out about some of " +
                           "the cool stuff that is being done with APIs.json, as well as what is possible in the future. " +
                           "What is APIs.json? APIs.json provides a machine readable approach that API providers can put work",
                           PublishedDate = DateTime.Parse("2018-09-01"),
                           UserId = user.UserId
                },
                new Story {
                           Title = "Blog Post",
                           Body = "We need further clarification on this type. While it does validate in Google’s Structured Data Testing Tool, " +
                           "there is still a bit of confusion regarding the difference between a Blog, BlogPost and BlogPosting.",
                           PublishedDate = DateTime.Parse("2018-09-10"),
                           UserId = user.UserId
                },

            };
            stories.ForEach(p => context.Story.Add(p));
            context.SaveChanges();
        }
    }
}
