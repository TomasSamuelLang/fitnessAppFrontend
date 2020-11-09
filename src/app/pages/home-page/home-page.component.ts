import { Component, OnInit } from '@angular/core';
import { Workout, HomePageService } from './home-page.service';
import { AuthService } from '../login-page/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private homeService: HomePageService, private authService: AuthService) {}

  title = 'Home';
  isLoggedin = this.authService.isLoggedIn();
  workouts: Workout[];
  user = this.authService.parseUserData();

  ngOnInit() {
    this.homeService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
