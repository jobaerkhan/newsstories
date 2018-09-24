using NewsStories.DAL.Entities;
using NewsStories.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL.Repository
{
   public class StoryRepository : Repository<Story>, IStoryRepository
    {
        public NewsDbContext context
        {
            get
            {
                return context as NewsDbContext;
            }
        }

        public StoryRepository(NewsDbContext _db)
            : base(_db)
        {

        }

        public bool StoryExists(int id)
        {
            return context.Story.Count(e => e.Id == id) > 0;
        }


        public override IEnumerable<Story> GetAll()
        {
            return db.Set<Story>().Include("User").ToList().OrderByDescending(d => Convert.ToDateTime(d.PublishedDate));
        }
    }
}