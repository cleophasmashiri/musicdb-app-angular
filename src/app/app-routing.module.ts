import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'artist',
  pathMatch:'full'
}, {
  path: 'artist',
  component: ArtistSearchComponent
}, {
  path: 'artist/:artistId',
  component: ArtistDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
