import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(client: HttpClient) { }

  apiBaseUrl = "localhost:3000/"

  public getWorkouts() {
    
  }
}
