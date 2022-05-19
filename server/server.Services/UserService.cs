using Microsoft.EntityFrameworkCore;
using server.Common.Dtos.User;
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
    public class UserService : IUserService
    {
        private readonly DataContext _context;


        public UserService(DataContext context)
        {
            _context = context;
        }
        public async Task<User> AddAsync(CreateUserDto userDto)
        {
            var newUser = new User
            {
                Email = userDto.Email,
                Password = userDto.Password,
                IsAdmin = false,
            };

            await _context.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return newUser;

        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users
                .ToListAsync();
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(e => e.Id == id);
        }
    }
}
