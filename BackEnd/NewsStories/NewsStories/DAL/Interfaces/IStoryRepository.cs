using NewsStories.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Interfaces
{
    public interface IStoryRepository : IRepository<Story>
    {
        IQueryable<Story> GetAllStories();
    }
}