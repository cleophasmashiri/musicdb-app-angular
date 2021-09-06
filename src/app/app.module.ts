import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import {  HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './common/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistSearchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
