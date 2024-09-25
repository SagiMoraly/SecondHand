using Server.IRepository;
using Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace BookStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly IUsersRepository _usersRepository;

        public UserController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<UserDTO>> GetUser()
        {
            var userId = User.Identity?.Name;
            if (userId == null)
            {
                return BadRequest("Login");
            }
            var user = await _usersRepository.GetUser(userId);
            if (user == null)
            {
                return NotFound("Id User Not Found");
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<bool>> AddUser([FromBody]SignupUserModel user)
        {
            var result = await _usersRepository.AddUser(user);
            if (!result)
            {
                return BadRequest("UserName Is Taken");
            }
            return Ok(result);
        }

        [HttpPut]
        [Authorize]
        public async Task<ActionResult<bool>> EditUser([FromBody]SignupUserModel user)
        {
            var userId = User.Identity?.Name;
            if (userId == null)
            {
                return BadRequest("Login");
            }
            var userFromServer = await _usersRepository.EditUser(user, userId);
            if (!userFromServer)
            {
                return BadRequest("UserName Is Tenken");
            }
            return Ok(userFromServer);
        }

        [HttpDelete]
        [Authorize]
        public async Task<ActionResult<bool>> DeleteUser()
        {
            var userId = User.Identity?.Name;
            if (userId == null)
            {
                return BadRequest("Login");
            }
            var result = await _usersRepository.DeleteUser(userId);
            if (!result)
            {
                return Problem("Could Not Delete");
            }
            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> LoginUser([FromBody]LoginUserModel user)
        {
            var token = await  _usersRepository.LoginUser(user);
            if (token == null)
            {
                return BadRequest("UserName Or Password Is Wrong");
            }
            return Ok(new {token});
        }
    }
}
