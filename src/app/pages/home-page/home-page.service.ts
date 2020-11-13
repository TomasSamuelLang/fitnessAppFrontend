import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import apiBaseURL from 'src/app/services/config';

export interface Workout {
  _id: string;
  name: string;
  exercises: any[];
  description: string;
  date: Date;
  userId: string;
}

@Injectable()
export class HomePageService {

  constructor(private http: HttpClient) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${apiBaseURL}/workouts`);
  }
}
