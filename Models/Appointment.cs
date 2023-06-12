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


        public Appointment(int id, DateTime time, int serviceid, int stylistid, string clientemail, double amountpaid, double tip) 
        { 
            Id = id;
            Time = time;
            ServiceId = serviceid;  
            StylistId = stylistid;
            ClientEmail = clientemail;
            AmountPaid = amountpaid;
            Tip = tip;
        }
    }
}
