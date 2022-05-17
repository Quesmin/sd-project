using server.Common.Dtos.User;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IUserService
    {
        Task<User> GetById(int id);
        Task<IEnumerable<User>> GetAll();
        Task<User> AddAsync(CreateUserDto userDto);

    }
}
