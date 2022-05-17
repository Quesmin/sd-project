﻿using Microsoft.EntityFrameworkCore;
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
        public DataContext():base()
        {

        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}