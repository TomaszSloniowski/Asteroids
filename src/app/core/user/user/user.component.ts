import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch }  from './must-match.validator';
//import { debounceTime } from 'rxjs/operators';
import { SessionStorageService } from 'angular-web-storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    public session: SessionStorageService,
    private us: UserService,
    private router: Router
    ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.us.logIn(this.registerForm.value.email);
      this.router.navigate(['../daily-pictures']);
     // this.session.set('email', this.registerForm.value.email)
     // console.log('Register :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}