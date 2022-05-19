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
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = passwordHash;
            return Ok(await _userService.AddAsync(user));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok(await _userService.GetAll());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);

            if(user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

    }
}
