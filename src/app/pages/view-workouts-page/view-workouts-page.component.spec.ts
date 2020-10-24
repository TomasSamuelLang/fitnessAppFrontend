import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutsPageComponent } from './view-workouts-page.component';

describe('ViewWorkoutsPageComponent', () => {
  let component: ViewWorkoutsPageComponent;
  let fixture: ComponentFixture<ViewWorkoutsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkoutsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkoutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
