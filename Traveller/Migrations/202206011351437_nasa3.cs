namespace Traveller.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class nasa3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Places", "AvRate", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Places", "AvRate");
        }
    }
}
