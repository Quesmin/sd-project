using Microsoft.EntityFrameworkCore;
using server.Common.Dtos.Car;
using server.Common.Entities;
using server.Data;
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
        private readonly DataContext _context;

        public CarService(DataContext context)
        {
            _context = context;
        }
        public async Task<Car> AddCar(CreateCarDto carDto)
        {
            var manufacturer = _context.Manufacturers.FirstOrDefault(e => e.Id == carDto.ManufacturerId);

            if (manufacturer == null)
            {
                return null;
            }

            var car = new Car
            {
                Body = carDto.Body,
                Model = carDto.Model,
                Manufacturer = manufacturer,
                Mileage = carDto.Mileage,
                Seats = carDto.Seats,
                Weight = carDto.Weight,
                VIN = carDto.VIN,
                HP = carDto.HP,
                YearOfManufacture = carDto.YearOfManufacture,
                FuelType = carDto.FuelType,
            };

            await _context.AddAsync(car);
            await _context.SaveChangesAsync();

            return car;
        }

        public async Task<IEnumerable<Car>> GetAll()
        {
            return await _context.Cars.ToListAsync();
        }

        public Car GetById(int id)
        {
            return _context.Cars.FirstOrDefault(e => e.Id == id);
        }
    }
}
