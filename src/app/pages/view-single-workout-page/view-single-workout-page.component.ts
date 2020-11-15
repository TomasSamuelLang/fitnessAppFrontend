import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from '../login-page/auth.service';
import { Observable } from 'rxjs';
import { WorkoutService } from '../../services/workout.service';
import ActivityLog from 'src/app/model/ActivityLog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogsService } from 'src/app/services/logs.service';
import Workout from 'src/app/model/Workout';

@Component({
  selector: 'app-view-single-workout-page',
  templateUrl: './view-single-workout-page.component.html',
  styleUrls: ['./view-single-workout-page.component.css']
})
export class ViewSingleWorkoutPageComponent implements OnInit {
  workoutId: string;
  isLoggedin: Observable<boolean>;
  user = this.authService.parseUserData();
  workout: Workout;
  logs: ActivityLog[];
  newLog: ActivityLog;
  addLogForm: FormGroup;
  displayLogActivityComponents: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthService, private workoutService: WorkoutService, private router: Router, private logsService: LogsService) { }

  ngOnInit() {
    this.isLoggedin = this.authService.isLogged$;
    this.displayLogActivityComponents = false;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutId = params.get('id');
    });

    this.addLogForm = new FormGroup({
      newLogDescription: new FormControl(null, Validators.required),
      newLogWorkoutId: new FormControl(null, Validators.required)
    });
    this.resetData();
  }

  resetData() {
    this.workoutService.getWorkoutandExercises(this.workoutId)
      .subscribe(data => {
        this.workout = data;
      });
    this.newLog = new ActivityLog(new Date(), '');
  }

  onSubmitNewLog() {
    this.newLog.date = new Date();
    this.logsService.addLog({ newLog: this.newLog, workoutId: this.workoutId }).then(() => {
      alert("Log added successfully");
      this.resetData();
    })
  }

  onEdit() {
    this.router.navigate([`/workouts/${this.workoutId}/edit`]);
  }

  onLogActivity() {
    if (this.authService.isLoggedIn()) {
      this.displayLogActivityComponents = !this.displayLogActivityComponents;
    }
  }
}
