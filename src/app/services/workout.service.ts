import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Workout, { Workout2 } from '../model/Workout';
import { Observable } from 'rxjs'
import { AuthService } from '../pages/login-page/auth.service';
import apiBaseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  apiURL = `${apiBaseUrl}/workouts`;
  http: HttpClient;

  constructor(client: HttpClient, private authService: AuthService) {
    this.http = client;
  }

  getWorkouts(userId: string) {
    return this.http.get<Workout[]>(`${this.apiURL}/${userId}`).toPromise();
  }

  postWorkout(userId: string, workout: Workout) {
    const token = this.authService.retrieveToken();
    const header = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token });
    return this.http.post(`${this.apiURL}`, workout, { headers: header }).toPromise();
  }

  getWorkoutandExercises(workoutId: string): Observable<Workout2> {
    return this.http.get<Workout2>(`${this.apiURL}/workout/${workoutId}`);
  }

  getWorkout(id: string): Promise<Workout> {
    return this.http.get<Workout>(`${this.apiURL}/workout/${id}`).toPromise();
  }

  updateWorkout(workout) {
    const token = this.authService.retrieveToken();
    const header = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token });
    return this.http.put<Workout>(`${this.apiURL}`, workout, { headers: header }).toPromise();
  }
}
