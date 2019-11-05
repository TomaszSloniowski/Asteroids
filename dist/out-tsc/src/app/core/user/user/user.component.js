import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
// import { debounceTime } from 'rxjs/operators';
import { SessionStorageService } from 'angular-web-storage';
import { UserService } from '../user.service';
let UserComponent = class UserComponent {
    constructor(formBuilder, session, us, router) {
        this.formBuilder = formBuilder;
        this.session = session;
        this.us = us;
        this.router = router;
        this.submitted = false;
    }
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
};
UserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        SessionStorageService,
        UserService,
        Router])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map