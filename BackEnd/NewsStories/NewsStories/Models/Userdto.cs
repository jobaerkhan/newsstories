namespace NewsStories.Models
{
    public class Userdto
    {
        public int Id { get; set; }
        public string Username { get; set; }

        public Userdto(User user)
        {
            Id = user.UserId;
            Username = user.UserName;
        }
    }
}