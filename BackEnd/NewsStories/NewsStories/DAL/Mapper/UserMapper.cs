using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace NewsStories.DAL.Mapper
{
    public partial class StoryMapper
    {
        class UserMapper : EntityTypeConfiguration<User>
        {
            public UserMapper()
            {
                this.ToTable("User");

                this.HasKey(c => c.UserId);
                this.Property(c => c.UserId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
                this.Property(c => c.UserId).IsRequired();

                this.Property(c => c.UserName).IsRequired();
                this.Property(c => c.UserName).HasMaxLength(255);

                this.Property(c => c.Email).IsRequired();

                this.Property(c => c.Password).IsRequired();

            }
        }
    }
}