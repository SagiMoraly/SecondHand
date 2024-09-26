using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using static Server.Enum.Realestate;

namespace Server.Data
{
    public class DbSecondHandContext : IdentityDbContext<UserModel>
    {
        public DbSecondHandContext(DbContextOptions<DbSecondHandContext> options) : base(options) { }

        public DbSet<RealestateForsaleModel> RealestateForsale { get; set; }
        public DbSet<RealestateRentModel> RealestateRent { get; set; }
        public DbSet<UserFavoriteModel> UserFavorite { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // Ensure that Identity models are correctly configured
        //    base.OnModelCreating(modelBuilder);

        //    // Explicit configuration of UserFavorite relationship (if needed)
        //    modelBuilder.Entity<UserFavoriteModel>()
        //        .HasOne(uf => uf.User)
        //        .WithMany(u => u.UserFavorite)
        //        .HasForeignKey(uf => uf.UserId);

        //    // If UserFavoriteModel uses a polymorphic relationship, map the 'Favorite' to the proper type
        //    modelBuilder.Entity<UserFavoriteModel>()
        //        .HasOne(uf => uf.Favorite)
        //        .WithMany() // assuming no navigation property from the real estates back to UserFavoriteModel
        //        .HasForeignKey(uf => uf.FavoriteId)
        //        .HasForeignKey(uf => uf.FavoriteType);
        //}
    }

}
