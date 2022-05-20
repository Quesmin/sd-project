using server.Common.Dtos.Favorite;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IFavoriteService
    {
        Favorite GetById(int id);
        Task<Favorite> AddFavorite(CreateFavoriteDto favoriteDto);
        Task<IEnumerable<Favorite>> GetAll();

        Task<Favorite> Update(int id, CreateFavoriteDto favoriteDto);

        Task<Favorite> Delete(int id);
    }
}
