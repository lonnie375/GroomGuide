import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stylists } from '../../Interfaces/stylists';
import { Services } from '../../Interfaces/services';
import { LocalApiService } from '../../Services/localapiservices.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog'; // Import Angular's dialog if available
import { AppointmentComponent } from '../appointment/appointment.component';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  stylist: Stylists[] | undefined;
  services: Services[] | undefined;
  selected = false;

  constructor(
    private route: ActivatedRoute,
    private localApiService: LocalApiService, 
    private dialog: MatDialog
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const stylistId = +params['id']; // Get the stylist ID from the route parameter
      this.getStylistServices(stylistId);
      this.getStylistById(stylistId);
    });
  }


  getStylistServices(stylistId: number): void {
    this.localApiService.getAllServicesByStylist(stylistId).subscribe(
      (response: Services[]) => {
        this.services = response;
      },
      (error: any) => {
        console.error('Error getting stylist services:', error);
      }
    );
  }

  getStylistById(stylistId: number): void  {
    this.localApiService.getStylistById(stylistId).subscribe(
      (response: Stylists[]) => {
        this.stylist = response; 
      }, 
      (error: any) => {
        console.error('Error getting stylist details:', error);
      }
    ); 
  }

  // Method to open the appointment dialog
  showConfirmationDialog(selectedService: any) {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      data: { service: selectedService }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close if needed
    });
  }

}
