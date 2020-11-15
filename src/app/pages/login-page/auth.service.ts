import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import apiBaseURL from 'src/app/services/config';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn() || false);
  private user = new BehaviorSubject(this.parseUserData());
  public isLogged$ = this.loggedIn.asObservable();
  public user$ = this.user.asObservable();

  login(body: any) {
    return this.http.post<any>(apiBaseURL + '/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  saveToken(res: any) {
    localStorage.setItem('token', res.token);
  }

  nextloginValue(value: boolean) {
    this.loggedIn.next(value);
  }

  nextUserValue(value: any) {
    this.user.next(value);
  }

  retrieveToken() {
    if (localStorage.token) {
      return localStorage.token;
    } else {
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
