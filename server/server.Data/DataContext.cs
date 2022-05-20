using Microsoft.EntityFrameworkCore;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data
{
    public class DataContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Favorite> Favorites { get; set; }  

        protected override  void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>().Navigation(e => e.Manufacturer).AutoInclude();
            modelBuilder.Entity<Appointment>().Navigation(e => e.Car).AutoInclude();
            modelBuilder.Entity<Appointment>().Navigation(e => e.User).AutoInclude();
            modelBuilder.Entity<Favorite>().Navigation(e => e.User).AutoInclude();
            modelBuilder.Entity<Favorite>().Navigation(e => e.Car).AutoInclude();
        }


        public DataContext():base()
        {

        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}
