using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Common.Entities
{
    public class Appointment
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Car Car { get; set; }
        public DateTime Date { get; set; }
        public string PhoneNumber { get; set; }
        public string Message { get; set; }

    }
}
