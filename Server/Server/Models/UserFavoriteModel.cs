using static Server.Enum.Realestate;

namespace Server.Models
{
    public class UserFavoriteModel
    {
        public Guid Id { get; set; }
        public UserModel User { get; set; }
        public string UserId { get; set; }
        //public FavoriteType FavoriteType { get; set; }
        //public Guid FavoriteId { get; set; }
        //public FavoriteBase Favorite { get; set; }
        public RealestateForsaleModel RealestateForsale { get; set; }
        public RealestateRentModel RealestateRent { get; set; }
    }
}
