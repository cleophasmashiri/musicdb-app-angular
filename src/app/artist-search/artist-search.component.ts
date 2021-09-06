import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../model/artist';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  
  artists: Artist[] | undefined;
  error: any;
  loading = false;

  constructor(private service: SearchService,  private router: Router) { }

  ngOnInit(): void {
    this.search('eminem');
  }

  search(term: string): void {
    this.loading = true;
    this.service.searchArtist(term)
    .then(results => this.artists = results)
    .catch(err => this.error = err)
    .finally(() => this.loading = false);
  }

  showDetails(id: string): void {
    this.router.navigate(['/artist/' + id]);
  }

}
