using GroomGuide.Models;
using Microsoft.EntityFrameworkCore;

namespace GroomGuide.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Service> Services { get; set; }

        public DbSet<Stylist> Stylist { get; set; } 
    }
}
