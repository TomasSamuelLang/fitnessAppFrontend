import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Exercise from 'src/app/model/Exercise';
import Workout, { ViewWorkoutExercise, WorkoutExercise } from 'src/app/model/Workout';
import { ExerciseService } from '../../services/exercise.service';
import { WorkoutService } from '../../services/workout.service';
import { Router } from '@angular/router';
import User from 'src/app/model/User';


@Component({
  selector: 'app-create-workout-page',
  templateUrl: './create-workout-page.component.html',
  styleUrls: ['./create-workout-page.component.css', '../../app.component.css']
})
export class CreateWorkoutPageComponent implements OnInit {
  creteWorkoutForm: FormGroup;
  availableExercises: ViewWorkoutExercise[] = [];
  selectedExercises: ViewWorkoutExercise[] = [];
  newWorkout: Workout;
  newExercise: Exercise;
  user: User = new User("5f76cc899ee6690017c59703", "me@gmail.com", "..");

  constructor(private exerciseService: ExerciseService, private workoutService: WorkoutService, private router: Router) {
    this.newWorkout = new Workout(new Date(), this.user._id);
    
  }

  ngOnInit() {
    this.creteWorkoutForm = new FormGroup({
      workoutName: new FormControl(null, Validators.required),
      workoutDescription: new FormControl(null, Validators.required),
      exerciseList: new FormControl()
    })

    this.exerciseService.getExercises()
      .then((exercises: Exercise[]) => {
        console.log(exercises);
        this.availableExercises = exercises.map(ex => {
          let newEx = new ViewWorkoutExercise(ex._id, ex.name);
          newEx.description = ex.description;
          return newEx;
        });
      })
  }

  isVisible(exercise: ViewWorkoutExercise) {
    return this.selectedExercises.filter(ex => {
      return exercise.id === ex.id
    }).length > 0
  }
  
  onSubmit() {
    this.newWorkout.exercises = this.selectedExercises.map(exercise => {
      return new WorkoutExercise(exercise.id, exercise.repsOrTime, exercise.sets);
    })
    this.workoutService.postWorkout(this.user._id, this.newWorkout)
    .then((res: Workout) => {
      this.router.navigate([`workouts/${res._id}`])
    });
  }

  createExercise() {
    this.newExercise = new Exercise();
  }

  saveExercise() {
    this.exerciseService.postExercise(this.newExercise)
    .then((res: Exercise) => {
      console.log(res)
      if(res){
        let newExercise = new ViewWorkoutExercise(res._id || res._id, res.name);
        newExercise.description = res.description;
        this.availableExercises.push(newExercise);
        this.newExercise = null;
      }      
    });
  }
}
