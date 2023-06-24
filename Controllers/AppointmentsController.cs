using GroomGuide.Data;
using GroomGuide.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroomGuide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private ApplicationDbContext _context;

        public AppointmentController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        //Create Appointment
        [HttpPost("CreateAppointment")]
        public IActionResult CreateAppointment(Appointment appt)
        {
            _context.Appointments.Add(appt);
            _context.SaveChanges();
            return Ok();
        }


        //Get All Appointments
        [HttpGet("GetStylistAppointments")]
        public IActionResult GetAllAppointmentsByStylist(int id)
        {
            if (_context.Appointments == null)
            {
                return NotFound();
            }

            var response = _context.Appointments.Where(x => x.StylistId == id).ToList();
            return Ok(response);
        }


        //Delete Appointment
        [HttpDelete("DeleteAppointment")]
        public IActionResult DeleteAppointment(int id)
        {
            Appointment appt = _context.Appointments.FirstOrDefault(x => x.Id == id);

            if (appt == null)
            {
                return BadRequest(appt);
            }

            _context.Appointments.Remove(appt);
            _context.SaveChanges();
            return Ok();
        }

        //Edit Appointment 
        [HttpPut("EditAppointment")]
        public IActionResult EditAppointment(int id, Appointment appointment)
        {
            Appointment appt = _context.Appointments.FirstOrDefault(x => x.Id == id);

            appt.Time = appointment.Time;
            appt.ServiceId = appointment.ServiceId;
            appt.Tip = appointment.Tip;
            appt.ClientEmail = appointment.ClientEmail;
            appt.AmountPaid = appointment.AmountPaid;

            _context.Appointments.Update(appt);
            _context.SaveChanges();
            return Ok();
        }

    }
}
