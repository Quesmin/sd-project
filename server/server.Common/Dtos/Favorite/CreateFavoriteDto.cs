using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Common.Dtos.Favorite
{
    public class CreateFavoriteDto
    {
        public int UserId { get; set; }
        public int CarId { get; set; }
        public DateTime Date { get; set; }
    }
}
