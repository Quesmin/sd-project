using server.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Common.Entities
{

    
    internal class Car
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public BodyType Body { get; set; }
        public int Mileage { get; set; }
        public int Seats { get; set; }
        public int Weight { get; set; }
        public string VIN { get; set; }
        public int HP { get; set; }
        public uint YearOfManufacture { get; set; }
        public FuelType FuelType { get; set; }

    }
}
