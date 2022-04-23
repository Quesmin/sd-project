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
        Task<Manufacturer> GetById(int id);

    }
}
