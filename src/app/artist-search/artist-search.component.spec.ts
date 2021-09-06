import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MockService } from '../services/mock.service';
import { SearchService } from '../services/search.service';

import { ArtistSearchComponent } from './artist-search.component';

describe('ArtistSearchComponent', () => {
  let component: ArtistSearchComponent;
  let fixture: ComponentFixture<ArtistSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSearchComponent ],
      imports: [RouterModule.forRoot([])],
      providers: [{provide: SearchService, useClass: MockService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
