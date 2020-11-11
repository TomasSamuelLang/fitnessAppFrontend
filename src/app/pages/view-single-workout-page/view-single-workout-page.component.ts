import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../login-page/auth.service';
import { Observable } from 'rxjs';
import Workout2 from 'src/app/model/Workout';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-view-single-workout-page',
  templateUrl: './view-single-workout-page.component.html',
  styleUrls: ['./view-single-workout-page.component.css']
})
export class ViewSingleWorkoutPageComponent implements OnInit {
  workoutId: string;
  isLoggedin: Observable<boolean>;
  user = this.authService.parseUserData();
  workout: any;

  constructor(private route: ActivatedRoute, private authService: AuthService, private workoutService: WorkoutService) { }

  ngOnInit() {
    this.isLoggedin = this.authService.isLogged$;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutId = params.get('id');
      this.workoutService.getWorkoutandExercises(this.workoutId)
      .subscribe(data => {
      this.workout = data;
    });
    });
  }
}
