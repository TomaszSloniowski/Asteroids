import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// import { Subscriber } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { SessionStorageService } from 'angular-web-storage';
let UserService = class UserService {
    constructor(session) {
        this.session = session;
        this.loggedIn = false;
        this.logger = new Subject();
    }
    isLoggedIn() {
        return this.logger.asObservable();
    }
    logIn(email) {
        this.session.set('email', email);
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
    }
    logOut() {
        this.session.remove('email');
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [SessionStorageService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map