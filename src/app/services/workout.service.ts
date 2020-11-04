import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Workout, { WorkoutExercise } from '../model/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  apiBaseUrl = "localhost:3000/workouts";
  http: HttpClient;

  constructor(client: HttpClient) {
    this.http = client;
  }

  getWorkouts(userId: string) {
    return this.http.get<Workout[]>(`http://${this.apiBaseUrl}/${userId}`).toPromise();
  }
}
