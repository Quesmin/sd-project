using Microsoft.AspNetCore.Mvc;
using server.Common.Dtos.Manufacturer;
using server.Interfaces;
using server.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.API.Controllers
{
    [Route("/api/manufacturers")]
    [ApiController]
    public class ManufacturerController:ControllerBase
    {

        private readonly IManufacturerService _manufacturerService;

        public ManufacturerController(IManufacturerService manufacturerService)
        {
            _manufacturerService = manufacturerService;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var manufacturer = _manufacturerService.GetById(id);
            if(manufacturer == null)
            {
                return NotFound();
            }

            return Ok(manufacturer);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {

            return Ok(await _manufacturerService.GetAll());

        }

        [HttpPost]
        public async Task<IActionResult> AddManufacturer([FromBody] CreateManufacturerDto manufacturerDto)
        {
            return Ok(await _manufacturerService.AddManufacturer(manufacturerDto));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var manufacturer = await _manufacturerService.Delete(id);
            if(manufacturer == null)
            {
                return BadRequest();
            }
            return Ok(manufacturer);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CreateManufacturerDto manufacturerDto)
        {
            var manufacturer = await _manufacturerService.Update(id, manufacturerDto);
            if (manufacturer == null)
            {
                return BadRequest();
            }
            return Ok(manufacturer);
        }


    }
}
