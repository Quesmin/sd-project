using Microsoft.Extensions.DependencyInjection;
using server.Interfaces;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.API.MiddlewareExtensions
{
    public static class ServicesExtensions
    {
        public static void InjectServices(this IServiceCollection services)
        {
            services.AddTransient<IManufacturerService, ManufacturerService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IAppointmentService, AppointmentService>();
            services.AddTransient<ICarService, CarService>();
            services.AddTransient<IFavoriteService, FavoriteService>();

        }
    }
}
