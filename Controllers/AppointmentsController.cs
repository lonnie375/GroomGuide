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

        //Get Appointment Availability 
        [HttpGet("AppointmentAvailability")]
        public IActionResult GetAvailableAppointments(int stylistId, string serviceType, DateTime selectedDate)
        {
            // Calculate the starting time for available appointments (current time + 1 hour)
            DateTime startTime = DateTime.Now.AddHours(1);

            // Define working hours
            DateTime workStartTime = new DateTime(selectedDate.Year, selectedDate.Month, selectedDate.Day, 8, 0, 0);
            DateTime workEndTime = new DateTime(selectedDate.Year, selectedDate.Month, selectedDate.Day, 17, 0, 0);

            // Filter available time slots within working hours
            List<DateTime> availableTimeSlots = new List<DateTime>();
            while (startTime <= workEndTime)
            {
                if (startTime >= workStartTime)
                {
                    availableTimeSlots.Add(startTime);
                }
                startTime = startTime.AddMinutes(15); // 15-minute slots
            }

            return Ok(availableTimeSlots);
        }


    }
}
