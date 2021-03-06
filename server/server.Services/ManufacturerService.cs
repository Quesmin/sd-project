using Microsoft.EntityFrameworkCore;
using server.Common.Dtos.Manufacturer;
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
    public class ManufacturerService : IManufacturerService
    {
        private readonly DataContext _context;

        public ManufacturerService(DataContext context)
        {
            _context = context;
        }

        public async Task<Manufacturer> AddManufacturer(CreateManufacturerDto manufacturerDto)
        {
            var manufacturer = new Manufacturer
            {
                Name = manufacturerDto.Name,
            };

            await _context.AddAsync(manufacturer);
            await _context.SaveChangesAsync();

            return manufacturer;
        }

        public async Task<Manufacturer> Delete(int id)
        {
            var manufacturer = _context.Manufacturers.FirstOrDefault(x => x.Id == id);
            if (manufacturer == null) 
            {
                return null;
            }
            _context.Remove(manufacturer);
            await _context.SaveChangesAsync();

            return manufacturer;
        }

        public async Task<IEnumerable<Manufacturer>> GetAll()
        {
            return await _context.Manufacturers.ToListAsync();
        }

        public Manufacturer GetById(int id)
        {
            return _context.Manufacturers.FirstOrDefault(e => e.Id == id);
        }

        public async Task<Manufacturer> Update(int id, CreateManufacturerDto manufacturerDto)
        {
            var manufacturer = _context.Manufacturers.FirstOrDefault(e => e.Id == id);
            if (manufacturer == null)
            {
                return null;
            }

            _context.Entry(manufacturer).CurrentValues.SetValues(manufacturerDto);
            await _context.SaveChangesAsync();

            return _context.Manufacturers.FirstOrDefault(e => e.Id == id);
        }
    }
}
