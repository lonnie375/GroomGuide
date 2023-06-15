namespace GroomGuide.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime Time { get; set; }
        public int ServiceId { get; set; }
        public int StylistId { get; set; }
        public string ClientEmail { get; set; }
        public double AmountPaid { get; set; }
        public double Tip { get; set; }

        public Appointment()
        {
            // Default constructor
        }

        public Appointment(DateTime time, int serviceId, int stylistId, string clientEmail, double amountPaid, double tip)
        {
            Time = time;
            ServiceId = serviceId;
            StylistId = stylistId;
            ClientEmail = clientEmail;
            AmountPaid = amountPaid;
            Tip = tip;
        }
    }

}
