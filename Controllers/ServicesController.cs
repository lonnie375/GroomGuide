using GroomGuide.Data;
using GroomGuide.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroomGuide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private ApplicationDbContext _context;

        public ServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        //Create Service
        [HttpPost("CreateService")]
        public IActionResult CreateService(Service service)
        {
            _context.Services.Add(service);
            _context.SaveChanges();
            return Ok();

        }

        //Get All Services
        [HttpGet("GetAllServices")]
        public IActionResult GetAllServicesByStylist(int id)
        {
            if (_context.Services == null)
            {
                return NotFound();
            }

            var response = _context.Services.Where(x => x.StylistId == id).ToList();
            return Ok(response);
        }


        //Delete Service
        [HttpDelete("DeleteStylistService")]
        public IActionResult DeleteService(int stylistID, string name)
        {
            Service services = _context.Services.FirstOrDefault(x => x.StylistId == stylistID && x.Name.ToLower() == name.ToLower()); 

            if (services == null)
            {
                return BadRequest(services);
            }

            _context.Services.Remove(services);
            _context.SaveChanges();
            return Ok();
        }

        //Edit Service
        [HttpPut("EditStylistServices")]
        public IActionResult EditStylistServices(int id, Service service)
        {
            Service services = _context.Services.FirstOrDefault(x => x.Id == id); 

            services.Name = service.Name;
            services.Price = service.Price; 
            services.DurationInMinutes = service.DurationInMinutes;

            _context.Services.Update(services);
            _context.SaveChanges(); 
            return Ok();
        }
    }
}
