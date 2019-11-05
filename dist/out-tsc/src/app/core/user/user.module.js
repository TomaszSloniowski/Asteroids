import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './user.routing';
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    NgModule({
        declarations: [UserComponent],
        imports: [
            CommonModule,
            RouterModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        exports: [UserComponent]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map