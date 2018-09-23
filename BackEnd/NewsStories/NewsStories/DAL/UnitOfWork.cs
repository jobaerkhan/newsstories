using NewsStories.DAL.Interfaces;
using NewsStories.DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsStories.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly NewsDbContext db;

        public UnitOfWork()
        {
            db = new NewsDbContext();
        }

        private IStoryRepository _Stories;
        public IStoryRepository Story
        {
            get
            {
                if (this._Stories == null)
                {
                    this._Stories = new StoryRepository(db);
                }
                return this._Stories;
            }
        }

        private IUserRepository _User;
        public IUserRepository User
        {
            get
            {
                if (this._User == null)
                {
                    this._User = new UserRepository(db);
                }
                return this._User;
            }
        }

        public int SaveChanges()
        {
            return db.SaveChanges();
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}