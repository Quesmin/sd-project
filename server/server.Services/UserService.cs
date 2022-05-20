using BCrypt.Net;
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

        private static bool IsValidEmail(string email)
        {
            var trimmedEmail = email.Trim();

            if (trimmedEmail.EndsWith("."))
            {
                return false;
            }

            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == trimmedEmail;
            }
            catch
            {
                return false;
            }
        }

        public User Login(CreateUserDto userDto)
        {
            if (!IsValidEmail(userDto.Email))
            {
                return null;
            }

            var user = _context.Users.FirstOrDefault(e => e.Email == userDto.Email);

            if(user == null)
            {
                return null;
            }

            if (!BCrypt.Net.BCrypt.Verify(userDto.Password, user.Password))
            {
                return null;
            }

            return user;

        }

        public async Task<User> Register(CreateUserDto userDto)
        {
            if (!IsValidEmail(userDto.Email))
            {
                return null;
            }

            var user = _context.Users.FirstOrDefault(e => e.Email == userDto.Email);

            if(user != null)
            {
                return null;
            }

            var passwordHash = BCrypt.Net.BCrypt.HashPassword(userDto.Password);

            var newUser = new User
            {
                Email = userDto.Email,
                Password = passwordHash,
                IsAdmin = false
            };

            await _context.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return newUser;

        }


        public async Task<User> AddAsync(CreateUserDto userDto)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userDto.Password);

            var newUser = new User
            {
                Email = userDto.Email,
                Password = passwordHash,
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

        public async Task<User> Update(int id, CreateUserDto userDto)
        {
            var user = _context.Users.FirstOrDefault(e => e.Id == id);
            if (user == null)
            {
                return null;
            }

            _context.Entry(user).CurrentValues.SetValues(userDto);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> Delete(int id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return null;
            }
            _context.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }
    }
}
