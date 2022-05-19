using server.Common.Dtos.Favorite;
using server.Common.Entities;
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
        public Task<Favorite> AddFavorite(CreateFavoriteDto favoriteDto)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Favorite>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Favorite GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
