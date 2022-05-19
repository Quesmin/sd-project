using Microsoft.AspNetCore.Mvc;
using server.Common.Dtos.Appointment;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.API.Controllers
{
    [Route("/api/appointments")]
    [ApiController]
    public class AppointmentController: ControllerBase
    {

        private readonly IAppointmentService _appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var appointment = _appointmentService.GetById(id);
            if (appointment == null)
            {
                return NotFound();
            }

            return Ok(appointment);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {

            return Ok(await _appointmentService.GetAll());

        }

        [HttpPost]
        public async Task<IActionResult> AddManufacturer([FromBody] CreateAppointmentDto appointmentDto)
        {
            return Ok(await _appointmentService.AddAppointment(appointmentDto));
        }
    }
}
