import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Login';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!this.loginForm.valid){
      console.log('Invalid form raise error');
      return;
    } else {
      this.authService.login(this.loginForm.value)
        .subscribe(
          (response) => {
            console.log('Logged in');
            console.log(response.token);
            this.authService.saveToken(response);
            this.router.navigate(['']);
          });
    }
  }
}
