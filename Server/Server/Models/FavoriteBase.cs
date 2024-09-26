using static Server.Enum.Realestate;

namespace Server.Models
{
    public abstract class FavoriteBase
    {
        public Guid Id { get; set; }
        public FavoriteType FavoriteType { get; set; }
    }
}
