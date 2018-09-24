using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using NewsStories.DAL;
using NewsStories.Models;

namespace NewsStories.Controllers
{
    public class UserController : ApiController
    {
        [AllowAnonymous]
        [Route("api/User/Register")]
        [HttpPost]
        public IdentityResult Register(UserModel model)
        {
            var userStore = new UserStore<User>(new NewsDbContext());
            var manager = new UserManager<User>(userStore);
            var user = new User() { UserName = model.UserName, Email = model.Email, FullName = model.FullName };
            IdentityResult result = manager.Create(user, model.Password);

            return result;
        }

        [HttpGet]
        [Authorize]
        [Route("api/GetUserClaims")]
        public UserModel GetUserClaims()
        {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            UserModel model = new UserModel()
            {
                UserName = identityClaims.FindFirst("Username").Value,
                Email = identityClaims.FindFirst("Email").Value,
                FullName = identityClaims.FindFirst("FullName").Value,
                UserId = identityClaims.FindFirst("UserId").Value,
            };
            return model;
        }

        [HttpPut]
        [Authorize]
        [Route("api/user")]
        public IdentityResult UpdateUser(UserModel model)
        {
            try
            {
                var userStore = new UserStore<User>(new NewsDbContext());
                var manager = new UserManager<User>(userStore);
                var user = manager.FindById(model.UserId);
                user.FullName = model.FullName;
                user.Email = model.Email;
                user.PasswordHash = manager.PasswordHasher.HashPassword(model.Password);
                IdentityResult result = manager.Update(user);
                return result;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
