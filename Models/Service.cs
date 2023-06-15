namespace GroomGuide.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int DurationInMinutes { get; set; }
        public int StylistId { get; set; }

        public Service() { }

        public Service(int id, string name, double price, int durationinminutes, int stylistid) 
        { 
            Id = id;
            Name = name;
            Price = price;
            DurationInMinutes = durationinminutes;
            StylistId = stylistid;
        }
    }
}
