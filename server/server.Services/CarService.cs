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
                Price = carDto.Price,
                FuelType = carDto.FuelType,
            };

            await _context.AddAsync(car);
            await _context.SaveChangesAsync();

            return car;
        }

        public async Task<Car> Delete(int id)
        {
            var car = _context.Cars.FirstOrDefault(x => x.Id == id);
            if (car == null)
            {
                return null;
            }
            _context.Remove(car);
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

        public async Task<Car> Update(int id, CreateCarDto carDto)
        {
            var car = _context.Cars.Include(e => e.Manufacturer).FirstOrDefault(e => e.Id == id);
            if (car == null)
            {
                return null;
            }

            _context.Entry(car).CurrentValues.SetValues(carDto);
            await _context.SaveChangesAsync();

            return _context.Cars.Include(e => e.Manufacturer).FirstOrDefault(e => e.Id == id);
        }
    }
}
