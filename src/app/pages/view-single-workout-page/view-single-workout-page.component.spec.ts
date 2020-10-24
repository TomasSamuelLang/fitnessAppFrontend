import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleWorkoutPageComponent } from './view-single-workout-page.component';

describe('ViewSingleWorkoutPageComponent', () => {
  let component: ViewSingleWorkoutPageComponent;
  let fixture: ComponentFixture<ViewSingleWorkoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleWorkoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleWorkoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
