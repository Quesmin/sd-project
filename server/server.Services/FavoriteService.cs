using Microsoft.EntityFrameworkCore;
using server.Common.Dtos.Favorite;
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
    public class FavoriteService : IFavoriteService
    {

        private readonly DataContext _context;

        public FavoriteService(DataContext context)
        {
            _context = context;
        }
        public async Task<Favorite> AddFavorite(CreateFavoriteDto favoriteDto)
        {
            var car = _context.Cars.FirstOrDefault(e => e.Id == favoriteDto.CarId);
            var user = _context.Users.FirstOrDefault(e => e.Id == favoriteDto.UserId);

            if (car == null || user == null)
            {
                return null;
            }

            var favorite = new Favorite
            {
                User = user,
                Car = car,
                Date = favoriteDto.Date
            };

            await _context.AddAsync(favorite);
            await _context.SaveChangesAsync();

            return favorite;
        }

        public async Task<Favorite> Delete(int id)
        {
            var favorite = _context.Favorites.FirstOrDefault(x => x.Id == id);
            if (favorite == null)
            {
                return null;
            }
            _context.Remove(favorite);
            await _context.SaveChangesAsync();

            return favorite;
        }

        public async Task<IEnumerable<Favorite>> GetAll()
        {
            return await _context.Favorites.ToListAsync();
        }

        public Favorite GetById(int id)
        {
            return _context.Favorites.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<Favorite> GetByUserId(int userId)
        {
            var user = _context.Users.FirstOrDefault();

            if (user == null)
            {
                return null;
            }

            return _context.Favorites.Where(e => e.User.Id == userId).ToList();
        }

        public async Task<Favorite> Update(int id, CreateFavoriteDto favoriteDto)
        {
            var favorite = _context.Favorites.FirstOrDefault(e => e.Id == id);
            if (favorite == null)
            {
                return null;
            }

            _context.Entry(favorite).CurrentValues.SetValues(favoriteDto);
            await _context.SaveChangesAsync();

            return _context.Favorites.FirstOrDefault(e => e.Id == id);
        }
    }
}
