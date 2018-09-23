using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using NewsStories.DAL.Interfaces;

namespace NewsStories.DAL.Repository
{
    public class UserRepository : IUserRepository
    {
        private NewsDbContext context;
        public UserRepository(NewsDbContext _db)
        {
            this.context = _db;
        }

        public User GetUser(string userId)
        {
            var userStore = new UserStore<User>(context);
            var manager = new UserManager<User>(userStore);
            var user = manager.FindById(userId);
            return user;
        }
    }
}