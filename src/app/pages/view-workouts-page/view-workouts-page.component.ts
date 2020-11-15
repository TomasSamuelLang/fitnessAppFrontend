import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import Workout from '../../model/Workout';
import { Router } from '@angular/router';
import { AuthService } from '../login-page/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-workouts-page',
  templateUrl: './view-workouts-page.component.html',
  styleUrls: ['./view-workouts-page.component.css', '../../app.component.css']
})
export class ViewWorkoutsPageComponent implements OnInit {

  constructor(private workoutService: WorkoutService, private authService: AuthService,
    private router: Router) { }

  title = 'Workouts';
  workouts: Workout[];
  isLoggedin: Observable<boolean>;
  user = this.authService.parseUserData();


  ngOnInit() {
    // change this to the users ID once we have that in place
    this.workoutService.getWorkouts(this.user.id)
      .then(res => {
        this.workouts = res;
      });
  }

  getWorkout(id: string) {
    this.router.navigate([`/workouts/${id}`]);
  }
}
