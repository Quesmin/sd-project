using Microsoft.EntityFrameworkCore;
using server.Common.Dtos.Appointment;
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
    public class AppointmentService : IAppointmentService
    {
        private readonly DataContext _context;


        public AppointmentService(DataContext context)
        {
            _context = context;
        }
        public async Task<Appointment> AddAppointment(CreateAppointmentDto appointmentDto)
        {
            var car = _context.Cars.FirstOrDefault(e => e.Id == appointmentDto.CarId);
            var user = _context.Users.FirstOrDefault(e => e.Id == appointmentDto.UserId);
            if (car == null || user == null)
            {
                return null;
            }

            var appointment = new Appointment
            {
                Car = car,
                User = user,
                Date = appointmentDto.Date,
                PhoneNumber = appointmentDto.PhoneNumber,
                Message = appointmentDto.Message,
            };

            await _context.AddAsync(appointment);
            await _context.SaveChangesAsync();

            return appointment;
        }

        public async Task<Appointment> Delete(int id)
        {
            var appointment = _context.Appointments.FirstOrDefault(x => x.Id == id);
            if (appointment == null)
            {
                return null;
            }
            _context.Remove(appointment);
            await _context.SaveChangesAsync();

            return appointment;
        }

        public async Task<IEnumerable<Appointment>> GetAll()
        {
            return await _context.Appointments.ToListAsync();
        }

        public Appointment GetById(int id)
        {
            return _context.Appointments.FirstOrDefault(e => e.Id == id);
        }

        public async Task<Appointment> Update(int id, CreateAppointmentDto appointmentDto)
        {
            var appointment = _context.Appointments.FirstOrDefault(e => e.Id == id);
            if (appointment == null)
            {
                return null;
            }

            _context.Entry(appointment).CurrentValues.SetValues(appointmentDto);
            await _context.SaveChangesAsync();

            return appointment;
        }
    }
}
