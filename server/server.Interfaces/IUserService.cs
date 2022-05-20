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
        User Login(CreateUserDto userDto);
        Task<User> Register(CreateUserDto userDto);
        User GetById(int id);
        Task<IEnumerable<User>> GetAll();
        Task<User> AddAsync(CreateUserDto userDto);
        Task<User> Update(int id, CreateUserDto userDto);

        Task<User> Delete(int id);

    }
}
