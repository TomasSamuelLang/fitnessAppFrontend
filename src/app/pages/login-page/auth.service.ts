import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(body: any) {
    return this.http.post<any>('http://127.0.0.1:3000/' + 'login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  saveToken(res: any) {
    localStorage.setItem('token', res.token);
  }

  retrieveToken() {
    if (localStorage.token)  {
      console.log('Token exist');
      return localStorage.token;
    } else {
      console.log('No token');
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // Taken from the lecture week 9 angular authentication
    const token = this.retrieveToken();
    if (token) {
      const result = JSON.parse(window.atob(token.split('.')[1]));
      return result.exp > Date.now() / 1000;
    } else {
          return false;
    }
  }

  parseUserData() {
    if (this.isLoggedIn()) {
      const token = this.retrieveToken();
      const result = JSON.parse(window.atob(token.split('.')[1]));
      console.log(result);
      return {
        id: result.userId,
        email: result.email,
      };

    } else {
      return {
        id: '',
        email: '',
      };
    }
  }

}
