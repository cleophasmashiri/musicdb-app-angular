import { Injectable } from "@angular/core";
import { Album } from "../model/album";
import { Artist } from "../model/artist";
import { Track } from "../model/track";

@Injectable()
export class MockService {

    searchArtistTopTracks(artistId: string): Promise<Track[]> {
        return new Promise<Track[]>((res, rej) => {
        });
    }

    searchArtistAlbums(artistId: string): Promise<Album[]> {
        return new Promise((resolve, reject) => {
        });
      }
    
      searchArtist(term: string): Promise<Artist[]> {
        return new Promise((resolve, reject) => {
        });
      }
    
      searchArtistById(id: string): Promise<Artist> {
        return new Promise((resolve, reject) => {
        });
      }
    

}