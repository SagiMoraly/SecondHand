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
            //var userNameExist = await _userManager.FindByNameAsync(signupUser.UserName);
            //if (userNameExist != null)
            //{
            //    return false;
            //}

            //UserModel user = new()
            //{
            //    UserName = signupUser.UserName,
            //    Email = signupUser.Email,
            //    Admin = false,
            //    Cart = new List<CartItemModel>(),
            //};

            //var result = await _userManager.CreateAsync(user, signupUser.Password);
            //if (result.Succeeded)
            //{
            //    return true;
            //}
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

            //if (!result.Succeeded) return false;

            //await _userManager.UpdateAsync(userFromServer);

            return true;
        }

        public async Task<UserDTO> GetUser(string userId)
        {
            //var user = await _userManager.FindByIdAsync(userId);
            //if (user == null)
            //{
                return null;
            //}
            //var userDTO = new UserDTO
            //{
            //    id = user.Id,
            //    email = user.Email,
            //    username = user.UserName,
            //    admin = user.Admin,
            //    cart = user.Cart
            //};

            //return userDTO;
        }

        public async Task<string> LoginUser(LoginUserModel user)
        {
            //var result = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, false, false);
            //if (!result.Succeeded)
            //  {
                  return null;
            //  }
            //var userFromServer = await _userManager.FindByNameAsync(user.UserName);
        
            //string token = _utilityFunctions.GenerateJwtToken(userFromServer.Id);
            //return token;
        }
    }
}
