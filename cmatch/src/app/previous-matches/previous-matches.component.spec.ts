import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousmatchesComponent } from './previous-matches.component';

describe('PreviousMatchesComponent', () => {
  let component: PreviousmatchesComponent;
  let fixture: ComponentFixture<PreviousmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
