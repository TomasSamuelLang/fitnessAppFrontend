import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  registerUser(body: any) {
    return this.http.post('http://127.0.0.1:3000/' + 'register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
