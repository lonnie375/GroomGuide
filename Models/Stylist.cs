namespace GroomGuide.Models
{
    public class Stylist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ImageUrl { get; set; }
        public List<Service> Services { get; set; }
        public List<Appointment> Appointments { get; set; }

        public Stylist(int id, string name, string address, string imageurl) 
        { 
            Id = id;
            Name = name;
            Address = address;
            ImageUrl = imageurl;
            Services = new List<Service>();
            Appointments = new List<Appointment>();
        }
    }
}
