import { Injectable } from '@angular/core';
import ActivityLog, { WorkoutWithActivityLog } from '../model/ActivityLog';
import { HttpClient } from '@angular/common/http';
import apiBaseUrl from './config';

@Injectable({
    providedIn: 'root'
})
export class LogsService {
    apiURL = `${apiBaseUrl}/logs`;
    constructor(public http: HttpClient) { }

    getLogs(userId: string) {
        return this.http.get<WorkoutWithActivityLog[]>(`${this.apiURL}/${userId}`).toPromise();
    }

    addLog(activityLog: ActivityLog) {
        return this.http.post<ActivityLog>(this.apiURL, activityLog).toPromise();
    }
}