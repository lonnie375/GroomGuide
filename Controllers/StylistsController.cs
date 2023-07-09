using GroomGuide.Data;
using GroomGuide.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GroomGuide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StylistsController : ControllerBase
    {
        private ApplicationDbContext _context;

        public StylistsController(ApplicationDbContext context)
        {
            _context = context;
        }

        //Create a Stylist

        [HttpPost("CreateStylist")]

        public IActionResult CreateStylist(Stylist style)
        {
            _context.Stylist.Add(style);
            _context.SaveChanges();
            return Ok();
        }

        //Get all Stylist 
        [HttpGet("GetAllStylist")]
        public IActionResult GetAllStylist()
        {
            if (_context.Stylist == null)
            {
                return NotFound();
            }

            var response = _context.Stylist.ToList();

            return Ok(response);    
        }

        //Delete a Stylist 
        [HttpDelete("DeleteStylist")]
        public IActionResult DeleteStylist(int id)
        {
            Stylist style = _context.Stylist.FirstOrDefault(x => x.Id == id);   

            if (style == null)
            {
                return BadRequest(style); 
            }
            _context.Stylist.Remove(style);
            _context.SaveChanges();
            return Ok();
        }

        //Edit A Stylist 
        [HttpPut("UpdateStylist")]
        public IActionResult UpdateStylist(int id, Stylist style)
        {
            Stylist styles = _context.Stylist.FirstOrDefault(x =>x.Id == id);

            styles.Address = style.Address;
            styles.Name = style.Name;
            styles.ImageUrl = style.ImageUrl;

            _context.Stylist.Update(styles);
            _context.SaveChanges();
            return Ok();
            
        }


        //I want to get all of the services the stylist offers.
    }
}
