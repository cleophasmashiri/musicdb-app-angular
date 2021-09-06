import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/album';
import { Artist } from '../model/artist';
import { Track } from '../model/track';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artist: Artist | undefined;
  error: any;
  loading = false;
  artistId: string = '';
  tracks: Track[] = [];
  albums: Album[] = [];

  constructor(private service: SearchService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => this.artistId = params['artistId']);
    this.search();
    this.service.searchArtistTopTracks(this.artistId)
    .then((tracks: Track[]) => this.tracks = tracks)
    .catch(err => this.error = err)
    .finally(() => this.loading = false)

    this.service.searchArtistAlbums(this.artistId)
    .then((albums: Album[]) => this.albums = albums)
    .catch(err => this.error = err)
    .finally(() => this.loading = false)


  }

  searchHandler(term: string): void {
    console.log(term)
  }

  search(): void {
    this.loading = true;
    this.service.searchArtistById(this.artistId)
      .then(results => this.artist = results)
      .catch(err => this.error = err)
      .finally(() => this.loading = false);
  }

  toHoursMinutesSeconds(totalSecondsStr: string){
    let totalSeconds = parseInt(totalSecondsStr);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    let result = `${minutes
      .toString()
      .padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (!!hours) {
      result = `${hours.toString()}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return result;
  };

}
