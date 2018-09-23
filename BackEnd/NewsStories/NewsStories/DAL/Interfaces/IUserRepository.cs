using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Interfaces
{
    public interface IUserRepository
    {
        User GetUser(string userId);
    }
}