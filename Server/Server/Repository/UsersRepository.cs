using Server.Data;
using Server.IRepository;
using Server.Models;
using Server.Utilitys;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Server.Repository
{

    public class UsersRepository : IUsersRepository
    {
        private readonly DbSecondHandContext _context;
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _signInManager;
        private readonly UtilitysFunctions _utilityFunctions;

        public UsersRepository(
            DbSecondHandContext context,
            UserManager<UserModel> userManager, 
            SignInManager<UserModel> signInManager,
            UtilitysFunctions utilityFunctions
            )
        {
            _context = context;
            _signInManager = signInManager;
            _userManager = userManager;
            _utilityFunctions = utilityFunctions;
        }
        public async Task<bool> AddUser(SignupUserModel signupUser)
        {
            var userNameExist = await _userManager.FindByEmailAsync(signupUser.Email);
            if (userNameExist != null)
            {
                return false;
            }

            UserModel user = new()
            {
                UserName = signupUser.Email,
                Email = signupUser.Email,
                FirstName = signupUser.FirstName,
                LastName = signupUser .LastName,
                PhoneNumber = signupUser.PhoneNumber,
            };

            var result = await _userManager.CreateAsync(user, signupUser.Password);
            if (result.Succeeded)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteUser(string userId)
        {
            //var user = await _userManager.FindByIdAsync(userId);
            //if (user == null || user.Admin)
            //{
                return false;
            //}
            //await _cartRepository.ClearCart(userId);
            //var result = await _userManager.DeleteAsync(user);
            //return result.Succeeded;
        }

        public async Task<bool> EditUser(SignupUserModel editUser, string userId)
        {
            //var userFromServer = await _userManager.FindByIdAsync(userId);
            //if (userFromServer == null ) return false;
            //var userNameExist = await _userManager.FindByNameAsync(editUser.UserName);
            //if (userFromServer.UserName != editUser.UserName && userNameExist != null) return false;

            //userFromServer.UserName = editUser.UserName;
            //userFromServer.Email = editUser.Email;

            //var passwordToken = await _userManager.GeneratePasswordResetTokenAsync(userFromServer);
            //var result = await _userManager.ResetPasswordAsync(userFromServer, passwordToken, editUser.Password);

            //if (!result.Succeeded)
            return false;

            //await _userManager.UpdateAsync(userFromServer);

            //return true;
        }

        public async Task<UserDTO> GetUser(string userId)
        {
            var user = await _context.Users.Include(u=> u.RealestateForsale).Include(u => u.RealestateRent).FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null)
            {
                return null;
            }
            var userDTO = new UserDTO
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Bday  = user.Bday,
                City = user.City,
                Street = user.Street,
                StreetNumber = user.StreetNumber,
                ProfilePic = user.ProfilePic,
                RealestateRent = user.RealestateRent,
                RealestateForsale = user.RealestateForsale,
                UserFavorite = user.UserFavorite
                };
            return userDTO;
        }

        public async Task<string> LoginUser(LoginUserModel user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.Email, user.Password, false, false);
            if (!result.Succeeded)
            {
                return null;
            }
            var userFromServer = await _userManager.FindByEmailAsync(user.Email);

            string token = _utilityFunctions.GenerateJwtToken(userFromServer.Id);
            return token;
        }

        public async Task<bool> EmailExist(string email)
        {
            var userNameExist = await _userManager.FindByEmailAsync(email);
            if (userNameExist != null)
            {
                return true;
            }
            return false;
        }
    }
}
