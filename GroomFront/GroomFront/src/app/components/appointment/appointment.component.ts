import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LocalApiService } from 'src/app/Services/localapiservices.service';
import { ActivatedRoute } from '@angular/router';
import { Appointments } from 'src/app/Interfaces/appointments';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  app: Appointments[] | undefined; //to store the appointments for the stylists


  constructor(private route: ActivatedRoute,
    private localApiService: LocalApiService) { }

  ngOnInit(): void {
  }

  /* Going to be used to remove the appointments the stylist has. 
this.appointmentService.getAvailableAppointments(stylistId, serviceType, selectedDate).subscribe(
  (availableAppointments: Date[]) => {
    // Handle the available appointments data here
  },
  (error) => {
    // Handle any errors
  }
);
  */

}
