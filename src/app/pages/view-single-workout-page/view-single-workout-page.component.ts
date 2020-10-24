import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-view-single-workout-page',
  templateUrl: './view-single-workout-page.component.html',
  styleUrls: ['./view-single-workout-page.component.css']
})
export class ViewSingleWorkoutPageComponent implements OnInit {
  exercise: string

  constructor(private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      return params.get('id');
    })).subscribe(val => {
      console.log("val", val)
      this.exercise = val})
  }
}
