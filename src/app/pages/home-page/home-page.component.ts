import { Component, OnInit } from '@angular/core';
import { Workout, HomePageService } from './home-page.service';
import { AuthService } from '../login-page/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private homeService: HomePageService, private authService: AuthService) {}

  title = 'Home';
  workouts: Workout[];
  isLoggedin: Observable<boolean>;
  user = this.authService.parseUserData();

  ngOnInit() {
    this.isLoggedin = this.authService.isLogged$;
    this.homeService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    },
    error => {
      console.log(error);
      return false;
    });
  }
}
