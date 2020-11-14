import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Exercise from 'src/app/model/Exercise';
import Workout, { WorkoutExercise, ViewWorkoutExercise } from 'src/app/model/Workout';
import { ExerciseService } from '../../services/exercise.service';
import { WorkoutService } from '../../services/workout.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import User from 'src/app/model/User';

@Component({
  selector: 'app-edit-single-workout',
  templateUrl: './edit-single-workout.component.html',
  styleUrls: ['./edit-single-workout.component.css', '../create-workout-page/create-workout-page.component.css', '../../app.component.css']
})
export class EditSingleWorkoutComponent implements OnInit {

  workoutId: string = "";
  creteWorkoutForm: FormGroup;
  availableExercises: ViewWorkoutExercise[] = [];
  selectedExercises: ViewWorkoutExercise[] = []
  workout: Workout;
  newExercise: Exercise;
  error: boolean;


  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService, private workoutService: WorkoutService, private router: Router) {
  }

  ngOnInit() {
    this.creteWorkoutForm = new FormGroup({
      workoutName: new FormControl(null, Validators.required),
      workoutDescription: new FormControl(null, Validators.required),
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutId = params.get('id');
      this.workoutService.getWorkout(this.workoutId)
        .then(res => {
          this.workout = res;
          console.log("workout", res)
          return this.exerciseService.getExercises();
        })
        .then(res => {
          this.availableExercises = res.map<ViewWorkoutExercise>(exercise => {
            let workoutEx = new ViewWorkoutExercise(exercise._id, exercise.name)
            workoutEx.description = exercise.description;
            return workoutEx;
          })

          // this is a little messy, if you feel like coding it, a builder pattern for the model classes would look nicer :)
          this.selectedExercises = this.workout.exercises.map<ViewWorkoutExercise>(workoutExercise => {
            let workoutViewExercise = this.availableExercises.find(exercise => workoutExercise.id === exercise.id);
            workoutViewExercise.repsOrTime = workoutExercise.repsOrTime;
            workoutViewExercise.set = workoutExercise.set;
            return workoutViewExercise;
          })
        });
    })
  }

  isHidden(exercise: ViewWorkoutExercise) {
    return this.selectedExercises.filter(selectedExercise => exercise.id === selectedExercise.id).length > 0;
  }

  onSubmit() {
    this.workout.exercises = this.selectedExercises.map(exercise => new WorkoutExercise(exercise.id, exercise.repsOrTime, exercise.set));
    this.workoutService.updateWorkout(this.workout)
      .then((res: Workout) => {
        this.error = false;
        this.router.navigate([`/workouts/${this.workoutId}`]);
      })
      .catch(err => { this.error = true });
  }
}
