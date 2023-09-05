import { Component, OnInit } from '@angular/core';
import { Stylists } from '../../Interfaces/stylists';
import { LocalApiService } from '../../Services/localapiservices.service';

@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.css']
})
export class StylistsComponent implements OnInit {
  
  stylists: Stylists[] | undefined;
  searchResults: Stylists[] | undefined;
  searchTerm: string = '';

  constructor(private localApiService: LocalApiService) { }

  ngOnInit(): void {
    this.getAllStylists();
  }

  getAllStylists(): void {
    this.localApiService.getAllStylists().subscribe(
      (response: Stylists[]) => {
        this.stylists = response;
        this.searchResults = response; // Initialize searchResults with all stylists
      },
      (error: any) => {
        console.error('Error getting stylists:', error);
      }
    );
  }

  searchStylists(): void {
    // Filter stylists based on the searchTerm
    if (this.searchTerm.trim() !== '') {
      this.searchResults = this.stylists?.filter(stylist =>
        stylist.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = this.stylists; // If search term is empty, show all stylists
    }
  }
}
