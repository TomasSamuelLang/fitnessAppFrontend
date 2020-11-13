import { Injectable } from '@angular/core';
import Exercise from '../model/Exercise';
import { HttpClient } from '@angular/common/http';
import apiBaseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  apiURL = `${apiBaseUrl}/exercises`;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getExercises() {
    return this.http.get<Exercise[]>(`${this.apiURL}`).toPromise();
  }

  postExercise(exercise: Exercise) {
    return this.http.post<Exercise>(this.apiURL, exercise).toPromise();
  }
}
