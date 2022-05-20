using server.Common.Dtos.Car;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface ICarService
    {

        Car GetById(int id);
        Task<Car> AddCar(CreateCarDto carDto);
        Task<IEnumerable<Car>> GetAll();

        Task<Car> Update(int id, CreateCarDto carDto);

        Task<Car> Delete(int id);
    }
}
