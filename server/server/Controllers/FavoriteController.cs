using Microsoft.AspNetCore.Mvc;
using server.Common.Dtos.Favorite;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.API.Controllers
{
    [Route("/api/favorites")]
    [ApiController]
    public class FavoriteController: ControllerBase
    {

        private readonly IFavoriteService _favoriteService;

        public FavoriteController(IFavoriteService favoriteService)
        {
            _favoriteService = favoriteService;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var favorite = _favoriteService.GetById(id);
            if (favorite == null)
            {
                return NotFound();
            }

            return Ok(favorite);
        }

        [HttpGet]
        [Route("user/{id}")]
        public IActionResult GetByUserId(int id)
        {
            var favorites = _favoriteService.GetByUserId(id);
            if (favorites == null)
            {
                return NotFound();
            }

            return Ok(favorites);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {

            return Ok(await _favoriteService.GetAll());

        }

        [HttpPost]
        public async Task<IActionResult> AddFavorite([FromBody] CreateFavoriteDto favoriteDto)
        {
            return Ok(await _favoriteService.AddFavorite(favoriteDto));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var favorite = await _favoriteService.Delete(id);
            if (favorite == null)
            {
                return BadRequest();
            }
            return Ok(favorite);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CreateFavoriteDto favoriteDto)
        {
            var favorite = await _favoriteService.Update(id, favoriteDto);
            if (favorite == null)
            {
                return BadRequest();
            }
            return Ok(favorite);
        }
    }
}
