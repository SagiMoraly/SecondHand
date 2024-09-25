using Server.Models;

namespace Server.IRepository
{
    public interface IUsersRepository
    {
        public Task<UserDTO> GetUser(string userId);
        public Task<bool> AddUser(SignupUserModel user);
        public Task<bool> EditUser(SignupUserModel user, string userId);
        public Task<bool> DeleteUser(string userId);
        public Task<string> LoginUser(LoginUserModel user);
    }
}
