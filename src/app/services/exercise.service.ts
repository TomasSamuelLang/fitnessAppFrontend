import { Injectable } from '@angular/core';
import Exercise from '../model/Exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apiBaseUrl from './config';
import { AuthService } from '../pages/login-page/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  apiURL = `${apiBaseUrl}/exercises`;
  http: HttpClient;

  constructor(http: HttpClient, private authService: AuthService) {
    this.http = http;
  }

  getExercises() {
    return this.http.get<Exercise[]>(`${this.apiURL}`).toPromise();
  }

  postExercise(exercise: Exercise) {
    const token = this.authService.retrieveToken();
    const header = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token });
    return this.http.post<Exercise>(this.apiURL, exercise, { headers: header }).toPromise();
  }
}
