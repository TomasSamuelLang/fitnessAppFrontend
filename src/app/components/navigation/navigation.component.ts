import { Component, OnChanges, OnInit} from '@angular/core';
import { AuthService } from '../../pages/login-page/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoggedin: Observable<boolean>;
  user: Observable<any>;


  logoutUser() {
    this.authService.logout();
    this.authService.nextloginValue(this.authService.isLoggedIn());
    this.authService.nextUserValue({id: '', email: ''});
  }

  ngOnInit() {
    this.isLoggedin = this.authService.isLogged$;
    this.user = this.authService.user$;
  }
}
