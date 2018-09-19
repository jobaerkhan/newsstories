using System;
using AutoMapper;
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
using NewsStories.Models;

namespace NewsStories.Controllers
{
    public class StoryforthirdpartyController : ApiController
    {
        IUnitOfWork db;

        public StoryforthirdpartyController()
        {
            db = new UnitOfWork();
        }

        //GET: api/Storyforthirdparty
        public IEnumerable<Story> Get()
        {
            var data = db.Story.GetAll();
            return data;
        }
    }
}
