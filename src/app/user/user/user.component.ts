import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from './user';
import { debounceTime } from 'rxjs/operators';

/*
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
} */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  customer = new User();
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      },),
       notification: 'email',
    });
  

  this.userForm.get('notification').valueChanges.subscribe(
    value => this.setNotification(value)
  );

  const emailControl = this.userForm.get('emailGroup.email');
  emailControl.valueChanges.pipe(
    debounceTime(1000)
  ).subscribe(
    value => this.setMessage(emailControl)
  );
}

populateTestData(): void {
  this.userForm.patchValue({
    firstName: 'Jack',
    lastName: 'Harkness',
    sendCatalog: false
  });
}

save() {
  console.log(this.userForm);
  console.log('Saved: ' + JSON.stringify(this.userForm.value));
}

setMessage(c: AbstractControl): void {
  this.emailMessage = '';
  console.log(this.validationMessages);
  if ((c.touched || c.dirty) && c.errors) {
    this.emailMessage = Object.keys(c.errors).map(
      key => this.emailMessage += this.validationMessages[key]).join(' ');
  }
}

setNotification(notifyVia: string): void {
  const phoneControl = this.userForm.get('phone');
  if (notifyVia === 'text') {
    phoneControl.setValidators(Validators.required);
  } else {
    phoneControl.clearValidators();
  }
  phoneControl.updateValueAndValidity();
}
}