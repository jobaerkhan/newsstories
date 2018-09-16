using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using NewsStories.DAL;
using NewsStories.DAL.Entities;
using NewsStories.DAL.Interfaces;

namespace NewsStories.Controllers
{
    public class StoriesController : ApiController
    {
        IUnitOfWork db;

        public StoriesController()
        {
            db = new UnitOfWork();
        }

        // GET: api/Stories
        public IEnumerable<Story> GetStory()
        {
            return db.Story.GetAll();
        }

        // GET: api/Stories/5
        [ResponseType(typeof(Story))]
        public IHttpActionResult GetStory(int id)
        {
            Story story = db.Story.GetByID(id);
            if (story == null)
            {
                return NotFound();
            }

            return Ok(story);
        }

        // PUT: api/Stories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStory(int id, Story story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != story.Id)
            {
                return BadRequest();
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!db.Story.StoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Stories
        [ResponseType(typeof(Story))]
        public IHttpActionResult PostStory(Story story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Story.Add(story);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = story.Id }, story);
        }

        // DELETE: api/Stories/5
        [ResponseType(typeof(Story))]
        public IHttpActionResult DeleteStory(int id)
        {
            Story story = db.Story.GetByID(id);
            if (story == null)
            {
                return NotFound();
            }

            db.Story.Remove(story);
            db.SaveChanges();

            return Ok(story);
        }
    }
}