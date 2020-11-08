import { Injectable } from '@angular/core';
import Exercise from '../model/Exercise';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  apiBaseUrl = "localhost:3000/exercises";
  http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  getExercises(){
    return this.http.get<Exercise[]>(`http://${this.apiBaseUrl}`).toPromise();
  }
}
