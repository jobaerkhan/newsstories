namespace NewsStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addForeignKey : DbMigration
    {
        public override void Up()
        {
            AddForeignKey("dbo.Post", "UserId", "dbo.Users", "UserId", cascadeDelete: true);
        }
        
        public override void Down()
        {
        }
    }
}
