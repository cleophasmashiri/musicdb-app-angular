import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from '../model/album';
import { Artist } from '../model/artist';
import { Track } from '../model/track';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  searchArtistTopTracks(artistId: string): Promise<Track[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}artist/${artistId}/top`)
        .toPromise()
        .then((res: any) => {
          let results = res?.data?.map((item: any) => new Track(item.id, item.title, item.duration));
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }

  searchArtistAlbums(artistId: string): Promise<Album[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}artist/${artistId}/albums`)
        .toPromise()
        .then((res: any) => {
          let results = res?.data?.map((item: any) => new Album(item.id, item.title, item.release_date, item.cover, item.cover_small, item.cover_medium, item.cover_big));
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }

  searchArtist(term: string): Promise<Artist[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}search?q=artist:${term}`)
        .toPromise()
        .then((res: any) => {
          let results = res?.data?.map((item: any) => new Artist(item?.artist.id, item?.artist.name, item?.artist.picture,
            item?.artist.picture_big, item?.artist.picture_xl, 0));
            let resultsUnique = this.getUnique(results);
            this.updateFanCount(resultsUnique);
          resolve(resultsUnique);
        })
        .catch(err => reject(err));
    });
  }

  searchArtistById(id: string): Promise<Artist> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}artist/${id}`)
        .toPromise()
        .then((item: any) => {
          let result = new Artist(item?.id, item?.name, item?.picture,
            item?.picture_big, item?.picture_xl, item.nb_fan);
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }

  updateFanCount(items: Artist[]): void {
    for (let artist of items) {
      this.searchArtistById(artist.id)
      .then(item => artist.nb_fan = item.nb_fan);
    }
  }
  getUnique(items: Artist[]): Artist[] {
    if (!items || items.length <1) return [];
    let set = new Set();
    const arr = [];
    for (let item of items) {
      if (!set.has(item.id)) {  
        arr.push(item);
      }
      set.add(item.id);
    }
    return arr;
  }
}

