import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Workout from '../model/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  apiBaseUrl = "http://localhost:3000/workouts";
  http: HttpClient;

  constructor(client: HttpClient) {
    this.http = client;
  }

  getWorkouts(userId: string) {
    return this.http.get<Workout[]>(`${this.apiBaseUrl}/${userId}`).toPromise();
  }

  postWorkout(userId: string, workout: Workout) {
    return this.http.post(`${this.apiBaseUrl}/${userId}`, workout).toPromise();
  }
}
