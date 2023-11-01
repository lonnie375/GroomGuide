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


  constructor(
    private route: ActivatedRoute,
    private localApiService: LocalApiService, 
    ) { }

  ngOnInit(): void {


  }

  /*this should be used to gather the stylist information that we want to bring to this component to verify that the time slot isn't selected. 
  this.localApiService.getAvailableAppointments(stylistId, selectedDate).subscribe(
    (availableAppointments: Date[]) => {

    }, 
    (error) => {
      
    }
  ){

  }
  */
}
