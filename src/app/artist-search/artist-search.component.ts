import { Component, OnInit } from '@angular/core';
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

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.search('eminem');
  }

  search(term: string): void {
    this.service.searchArtist(term)
    .then(results => this.artists = results)
    .catch(err => this.error = err);
  }

}
