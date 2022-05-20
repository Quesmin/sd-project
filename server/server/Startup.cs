using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using server.API.MiddlewareExtensions;
using server.Data;
using server.Interfaces;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pomelo.EntityFrameworkCore.MySql;
using Microsoft.EntityFrameworkCore;

namespace server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = "server=localhost;user=root;password=root;database=sd-project";
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 27));

            services.AddDbContext<DataContext>(options => 
                options.UseMySql(connectionString, serverVersion)
            );
            services.InjectServices();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "server", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "server v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x => { 
                x.AllowAnyOrigin();
                x.AllowAnyHeader();
                x.AllowAnyMethod();
            });

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
