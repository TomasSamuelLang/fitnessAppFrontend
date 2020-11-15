import { Injectable } from '@angular/core';
import ActivityLog from '../model/ActivityLog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apiBaseUrl from './config';
import { AuthService } from '../pages/login-page/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LogsService {
    apiURL = `${apiBaseUrl}/logs`;
    constructor(public http: HttpClient, private authService: AuthService) { }

    addLog(addLogInput: { newLog: ActivityLog, workoutId: string }) {
        const token = this.authService.retrieveToken();
        const header = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token });
        return this.http.post<ActivityLog>(this.apiURL, addLogInput, { headers: header }).toPromise();
    }
}