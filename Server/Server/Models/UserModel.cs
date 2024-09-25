using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public class UserModel : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Bday { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string StreetNumber { get; set; }
        public byte[] ProfilePic { get; set; }
        public List<RealestateRentModel> RealestateRent { get; set; }
        public List<RealestateForsaleModel> RealestateForsale { get; set; }
        public List<RealestateRentModel> RealestateRentFav { get; set; }
        public List<RealestateForsaleModel> RealestateForsaleFav { get; set; }
    }
}
