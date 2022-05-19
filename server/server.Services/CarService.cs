using server.Common.Dtos.Car;
using server.Common.Entities;
using server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Services
{
    public class CarService : ICarService
    {
        public Task<Car> AddCar(CreateCarDto carDto)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Car>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Car GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
