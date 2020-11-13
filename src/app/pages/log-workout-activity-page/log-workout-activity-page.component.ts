import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-page/auth.service';
import { Observable } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';
import ActivityLog, { WorkoutWithActivityLog } from 'src/app/model/ActivityLog';
import { HomePageService } from 'src/app/pages/home-page/home-page.service';
import Workout from 'src/app/model/Workout';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-workout-activity-page',
  templateUrl: './log-workout-activity-page.component.html',
  styleUrls: ['./log-workout-activity-page.component.css', '../../app.component.css']
})
export class LogWorkoutActivityPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private logsService: LogsService,
    private homePageService: HomePageService,
  ) { }

  isLoggedIn: Observable<boolean>;
  workoutsWithLogs: WorkoutWithActivityLog[];
  workouts: Workout[];
  user = this.authService.parseUserData();
  newLog: ActivityLog;
  addLogForm: FormGroup;

  ngOnInit() {
    this.homePageService.getWorkouts().subscribe(workouts => this.workouts = workouts);
    this.addLogForm = new FormGroup({
      newLogDescription: new FormControl(null, Validators.required),
      newLogWorkoutId: new FormControl(null, Validators.required)
    });
    this.resetData();
  }

  resetData() {
    this.logsService.getLogs(this.user.id).then(workouts => this.workoutsWithLogs = workouts);
    this.newLog = new ActivityLog(new Date(), '', '', '');
  }

  onSubmit() {
    this.newLog.date = new Date();
    this.newLog.userId = this.user.id;
    this.logsService.addLog(this.newLog).then(() => {
      alert("Log added successfully");
      this.resetData();
    })
  }
}
