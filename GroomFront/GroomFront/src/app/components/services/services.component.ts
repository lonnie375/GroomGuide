import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stylists } from '../../Interfaces/stylists';
import { Services } from '../../Interfaces/services';
import { LocalApiService } from '../../Services/localapiservices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  stylist: Stylists | undefined;
  services: Services[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private localApiService: LocalApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const stylistId = +params['id']; // Get the stylist ID from the route parameter
      this.getStylistServices(stylistId);
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
}
