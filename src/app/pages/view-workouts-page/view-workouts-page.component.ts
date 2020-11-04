import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import Workout, { WorkoutExercise} from '../../model/Workout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-workouts-page',
  templateUrl: './view-workouts-page.component.html',
  styleUrls: ['./view-workouts-page.component.css']
})
export class ViewWorkoutsPageComponent implements OnInit {
  title = "Workouts"
  workouts : Workout[]

  constructor(private workoutService: WorkoutService, private router: Router) {   }

  ngOnInit() {
    this.workoutService.getWorkouts("5f76cc899ee6690017c59703")
    .then(res => {
      console.log(res);
      this.workouts = res;
    });
  }

  getWorkout(id: string){
    this.router.navigate([`/workouts/${id}`])
  }
}
