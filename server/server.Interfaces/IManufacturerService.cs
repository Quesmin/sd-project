using server.Common.Dtos.Manufacturer;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IManufacturerService
    {
        Manufacturer GetById(int id);
        Task<Manufacturer> AddManufacturer(CreateManufacturerDto manufacturerName);
        Task<IEnumerable<Manufacturer>> GetAll();

        Task<Manufacturer> Update(int id, CreateManufacturerDto manufacturerDto);

        Task<Manufacturer> Delete(int id);


    }
}
