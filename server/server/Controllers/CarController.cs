using Microsoft.AspNetCore.Mvc;
using server.Common.Dtos.Car;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.API.Controllers
{
    [Route("/api/cars")]
    [ApiController]
    public class CarController : ControllerBase
    {

        private readonly ICarService _carService;

        public CarController(ICarService carService)
        {
            _carService= carService;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var car = _carService.GetById(id);
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {

            return Ok(await _carService.GetAll());

        }

        [HttpPost]
        public async Task<IActionResult> AddCar([FromBody] CreateCarDto carDto)
        {
            return Ok(await _carService.AddCar(carDto));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var car = await _carService.Delete(id);
            if (car == null)
            {
                return BadRequest();
            }
            return Ok(car);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CreateCarDto carDto)
        {
            var car = await _carService.Update(id, carDto);
            if (car == null)
            {
                return BadRequest();
            }
            return Ok(car);
        }
    }
}
