using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IManufacturerService _manufacturerService;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, IManufacturerService manufacturerService)
        {
            _logger = logger;
            _manufacturerService = manufacturerService;
        }

        [HttpGet]
        public Task<IActionResult> Get()
        {
            return  null;
        }
    }
}
