using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Common.Dtos.Appointment
{
    public class CreateAppointmentDto
    {
        public int UserId { get; set; }
        public int CarId { get; set; }
        public DateTime Date { get; set; }
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
    }
}
