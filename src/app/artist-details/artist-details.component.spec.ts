import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MockService } from '../services/mock.service';
import { SearchService } from '../services/search.service';

import { ArtistDetailsComponent } from './artist-details.component';

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [{provide: SearchService, useClass: MockService}],
      declarations: [ ArtistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
