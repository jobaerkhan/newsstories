using System.Collections.Generic;
using Microsoft.AspNet.Identity.EntityFramework;
using NewsStories.DAL.Entities;

public class User : IdentityUser
{
    public string FullName { get; set; }
    public ICollection<Story> Stories { get; set; }
}