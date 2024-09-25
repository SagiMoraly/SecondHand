using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class DbSecondHandContext : IdentityDbContext<UserModel>
    {
        public DbSecondHandContext(DbContextOptions<DbSecondHandContext> options) : base(options) { }
        public DbSet<RealestateForsaleModel> RealestateForsale { get; set; }
        public DbSet<RealestateRentModel> RealestateRent { get; set; }
    }
}
