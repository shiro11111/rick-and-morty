import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyListComponent } from './rick-and-morty-list.component';

describe('RickAndMortyListComponent', () => {
  let component: RickAndMortyListComponent;
  let fixture: ComponentFixture<RickAndMortyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickAndMortyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
