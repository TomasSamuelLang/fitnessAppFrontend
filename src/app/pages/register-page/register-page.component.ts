import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { RegisterService } from './register-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  title = 'Register';

  registerForm: FormGroup = new FormGroup({
    registerEmail: new FormControl(null, [Validators.email, Validators.required]),
    registerPassword: new FormControl(null, Validators.required),
    repeatPassword: new FormControl(null, Validators.required)
  });

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (!this.registerForm.valid
      || this.registerForm.controls.registerPassword.value !== this.registerForm.controls.repeatPassword.value) {
        console.log('Raise error, invalid form password are not equal');
        return;
    }
    this.registerService.registerUser(JSON.stringify(this.registerForm.value))
    .subscribe(data => { console.log(data), alert('Registered successfully'); this.router.navigate(['/login']); },
               error => console.error(error));
  }

}
