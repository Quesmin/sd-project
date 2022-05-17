using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Common.Entities
{
    internal class Favorite
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Car Car { get; set; }
        public DateTime Date { get; set; }

    }
}
