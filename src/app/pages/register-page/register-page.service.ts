import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apiBaseURL from 'src/app/services/config';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  registerUser(body: any) {
    return this.http.post(apiBaseURL + '/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
