using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using server.API.MiddlewareExtensions;
using server.Data;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using server.API.Middleware;

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
                options.UseMySql(connectionString, serverVersion), ServiceLifetime.Scoped, ServiceLifetime.Scoped
            );
            services.InjectServices();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "server", Version = "v1" });
            });

            services.AddLogging();
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

            app.UseMiddleware<RequestLoggingMiddleware>();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
