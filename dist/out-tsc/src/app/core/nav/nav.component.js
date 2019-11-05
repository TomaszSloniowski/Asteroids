import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { SessionStorageService } from 'angular-web-storage';
let NavComponent = class NavComponent {
    constructor(route, us, session) {
        this.route = route;
        this.us = us;
        this.session = session;
        this.loggedIn = false;
        this.user = '';
        this.isNavbarCollapsed = true;
    }
    ngOnInit() {
        this.us.isLoggedIn().subscribe((loggedIn) => {
            this.loggedIn = loggedIn;
            console.log('LoggedIn:', this.loggedIn);
            this.user = this.session.get('email');
            this.SignOutItem = loggedIn;
            console.log('SignOut:', this.SignOutItem);
            console.log('user: ', this.user);
        });
    }
    signOut() {
        this.us.logOut();
    }
};
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        UserService,
        SessionStorageService])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map