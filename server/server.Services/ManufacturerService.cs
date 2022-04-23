using server.Common.Entities;
using server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Services
{
    public class ManufacturerService : IManufacturerService
    {
        public async Task<Manufacturer> GetById(int id)
        {
            return new Manufacturer 
            {
                Id = id,
                Name = "Dacia"
            };
        }
    }
}
