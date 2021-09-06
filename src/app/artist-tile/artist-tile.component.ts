import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent implements OnInit {

  @Input()
  artist: Artist | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  showDetails(id: any): void {
    this.router.navigate(['/artist/' + id]);
  }

}
