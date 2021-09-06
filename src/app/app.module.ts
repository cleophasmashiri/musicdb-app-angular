import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistTileComponent } from './artist-tile/artist-tile.component';
import { AlbumTileComponent } from './album-tile/album-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistSearchComponent,
    ArtistTileComponent,
    AlbumTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
