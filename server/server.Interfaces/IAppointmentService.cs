using server.Common.Dtos.Appointment;
using server.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IAppointmentService
    {
        Appointment GetById(int id);
        Task<Appointment> AddAppointment(CreateAppointmentDto appointmentDto);
        Task<IEnumerable<Appointment>> GetAll();
        Task<Appointment> Update(int id, CreateAppointmentDto appointmentDto);

        Task<Appointment> Delete(int id);

        IEnumerable<Appointment> GetByUserId(int userId);
    }
}
