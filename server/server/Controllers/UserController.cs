using Microsoft.AspNetCore.Mvc;
using server.Common.Dtos.User;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.API.Controllers
{
    [Route("/api/users")]
    [ApiController]
    public class UserController:ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost]
        public async Task<IActionResult> AddAsync([FromBody] CreateUserDto user)
        {
            string passwordHash = BCrypt.Encrypt(user.Password);
            return Ok(await _userService.AddAsync(user));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok(await _userService.GetAll());
        }

    }
}
