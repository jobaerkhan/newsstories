namespace NewsStories.Models
{
    public class Userdto
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public Userdto(User user)
        {
            Id = user.UserId;
            UserName = user.UserName;
        }
    }
}