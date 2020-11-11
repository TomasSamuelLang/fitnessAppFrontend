import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Workout, { Workout2 } from '../model/Workout';
import { Observable } from 'rxjs'
import { AuthService } from '../pages/login-page/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  apiBaseUrl = 'http://localhost:3000/workouts';
  http: HttpClient;

  constructor(client: HttpClient, private authService: AuthService) {
    this.http = client;
  }

  getWorkouts(userId: string) {
    return this.http.get<Workout[]>(`${this.apiBaseUrl}/${userId}`).toPromise();
  }

  postWorkout(userId: string, workout: Workout) {
    const token = this.authService.retrieveToken();
    const header = new HttpHeaders({'Content-Type': 'application/json', Authorization: token});
    return this.http.post(`${this.apiBaseUrl}/${userId}`, workout, {headers: header}).toPromise();
  }

  getWorkoutandExercises(workoutId: string): Observable<Workout2> {
    return this.http.get<Workout2>(`${this.apiBaseUrl}/workout/${workoutId}`);
  }
}
