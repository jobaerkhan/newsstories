using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IStoryRepository Stories { get; }
        int SaveChanges();
    }
}