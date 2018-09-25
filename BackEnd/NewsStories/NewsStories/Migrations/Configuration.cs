using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

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
            var userStore = new UserStore<User>(context);
            var manager = new UserManager<User>(userStore);
            var user = new User
            {
                UserName = "jobaer",
                Email = "jobaer@gmail.com",
                FullName = "Jobaer Islam Khan"
            };
            IdentityResult result = manager.Create(user, "jobaer");


            var stories = new List<Story>
            {
                new Story {
                           Title = "How to DevOps with Azure",
                           Body = "In order to release quickly and have stable application environments with minimal errors, " +
                                  "it is of vital importance that developers work well with IT operations people and vice versa." +
                                  "To do this, they need to communicate well and sometimes work in the same team.\r\n\r\nIdeally, " +
                                  "they work in the same environment. Makes sense right? This is called DevOps. " +
                                  "DevOps is a hyped-up term, but it comes down to implementing common sense by working better together.",
                           PublishedDate = DateTime.Now,
                           UserId = user.Id,
                           User = user
                },
                new Story {
                           Title = "JSON Web Tokens vs. Session Cookies: In Practice",
                           Body = "Many modern web applications use JSON Web Tokens (JWT), rather than the traditional session-based authentication. " +
                                  "Quite a few challenges have been found with using server-side sessions in modern-day applications. " +
                                  "In this post, we’ll identify those challenges and explain how JWT and sessions work in practice." +
                                  "\r\n\r\nThere was a bit of controversy recently about the use cases where JWT really shines, " +
                                  "and the ones where it doesn’t do such a great job. Namely, are JSON web tokens good enough for " +
                                  "sessions – or should we keep using cookies instead?",
                           PublishedDate = DateTime.Now,
                           UserId = user.Id,
                           User = user
                },
                new Story {
                    Title = "Introduction to CQRS",
                    Body = "CQRS means Command Query Responsibility Segregation. Many people think that CQRS is an entire architecture, " +
                           "but they are wrong. CQRS is just a small pattern. This pattern was first introduced by Greg Young and Udi" +
                           " Dahan. They took inspiration from a pattern called Command Query Separation which was defined by Bertrand " +
                           "Meyer in his book “Object Oriented Software Construction”. The main idea behind CQS is: " +
                           "“A method should either change state of an object, or return a result, but not both. In other words, " +
                           "asking the question should not change the answer. More formally, methods should return a value only if " +
                           "they are referentially transparent and hence possess no side effects.”",
                    PublishedDate = DateTime.Now,
                    UserId = user.Id,
                    User = user
                },

            };
            stories.ForEach(p => context.Story.Add(p));
            context.SaveChanges();


        }
    }
}
