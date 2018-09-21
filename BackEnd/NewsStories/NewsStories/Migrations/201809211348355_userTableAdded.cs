namespace NewsStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class userTableAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
            AddColumn("dbo.Post", "UserId", c => c.Int(nullable: false,defaultValue:1));
            CreateIndex("dbo.Post", "UserId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Post", "UserId", "dbo.Users");
            DropIndex("dbo.Post", new[] { "UserId" });
            DropColumn("dbo.Post", "UserId");
            DropTable("dbo.Users");
        }
    }
}
