import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  searchArtist(term: string): Promise<Artist[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}search?q=artist:${term}`)
        .toPromise()
        .then((res: any) => {
          let results = res?.data?.map((item: any) => new Artist(item?.artist.id, item?.artist.name, item?.artist.picture,
            item?.artist.picture_big, item?.artist.picture_xl, 0));
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
}
//https://api.deezer.com/search?q=artist:"aloe blacc" track:"i need a dollar"
// "artist": {
//     "id": 10183,
//     "name": "Aloe Blacc",
//     "link": "https://www.deezer.com/artist/10183",
//     "picture": "https://api.deezer.com/artist/10183/image",
//     "picture_small": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/56x56-000000-80-0-0.jpg",
//     "picture_medium": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/250x250-000000-80-0-0.jpg",
//     "picture_big": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/500x500-000000-80-0-0.jpg",
//     "picture_xl": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/1000x1000-000000-80-0-0.jpg",
//     "tracklist": "https://api.deezer.com/artist/10183/top?limit=50",
//     "type": "artist"