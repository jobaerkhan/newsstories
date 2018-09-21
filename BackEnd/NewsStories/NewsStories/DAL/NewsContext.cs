using NewsStories.DAL.Entities;
using NewsStories.DAL.Mapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace NewsStories.DAL
{
    public class NewsDbContext : DbContext
    {
        public NewsDbContext() : base("NewsConnection")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;

            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<BlogDbContext, BlogContextMigrationConfiguration>());
        }

        public DbSet<Story> Story { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new StoryMapper());
            base.OnModelCreating(modelBuilder);
        }
    }
}