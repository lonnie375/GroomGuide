import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stylists } from '../../Interfaces/stylists';
import { LocalApiService } from '../../Services/localapiservices.service';

@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.css']
})
export class StylistsComponent implements OnInit {
  stylists: Stylists[] | undefined;

  constructor(private localApiService: LocalApiService) { }

  ngOnInit(): void {
    this.getAllStylists();
  }

  getAllStylists(): void {
    this.localApiService.getAllStylists().subscribe(
      (response: Stylists[]) => {
        this.stylists = response;
      },
      (error: any) => {
        console.error('Error getting stylists:', error);
      }
    );
  }
}
