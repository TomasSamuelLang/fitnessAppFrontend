import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Exercise from 'src/app/model/Exercise';
import Workout, { WorkoutExercise } from 'src/app/model/Workout';
import { ExerciseService } from '../../services/exercise.service';
import { WorkoutService } from '../../services/workout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-workout-page',
  templateUrl: './create-workout-page.component.html',
  styleUrls: ['./create-workout-page.component.css', '../../app.component.css']
})
export class CreateWorkoutPageComponent implements OnInit {
  creteWorkoutForm: FormGroup;
  availableExercises: WorkoutExercise[];
  newWorkout: Workout;

  constructor(private exerciseService: ExerciseService, private workoutService: WorkoutService, private router: Router) {
    this.newWorkout = new Workout(new Date(), "5f76cc899ee6690017c59703");
  }

  ngOnInit() {
    this.creteWorkoutForm = new FormGroup({
      workoutName: new FormControl(null, Validators.required),
      workoutDescription: new FormControl(null, Validators.required),
      exerciseList: new FormControl()
    })

    this.exerciseService.getExercises()
      .then((exercises: Exercise[]) => {
        this.availableExercises = exercises.map(ex => {
          let newEx = new WorkoutExercise(ex.id, ex.name);
          newEx.description = ex.description;
          return newEx;
        });
      })
  }

  isHidden(exercise: WorkoutExercise) {
    return this.newWorkout.exercises.includes(exercise)
  }
  
  onSubmit() {
    this.workoutService.postWorkout("5f76cc899ee6690017c59703", this.newWorkout)
    .then((res: Workout) => {
      this.router.navigate([`workouts/${res._id}`])
    });
  }
}
