import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalApiService } from 'src/app/Services/localapiservices.service';

@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.css']
})
export class StylistsComponent implements OnInit {

stylists: any[] | undefined;

  constructor(private localApiService: LocalApiService) { }

  ngOnInit(): void {

  }

  getAllStylists(): void {
    this.localApiService.getAllStylists().subscribe(
      (response: any) => {
        this.stylists = response; 
      },
      (error: any) => {
        console.error('Error getting sytlists:', error); 
      }
    )
  }


}
