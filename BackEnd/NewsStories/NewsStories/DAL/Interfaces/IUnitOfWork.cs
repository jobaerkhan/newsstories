using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IStoryRepository Story { get; }
        IUserRepository User { get; }
        int SaveChanges();
    }
}