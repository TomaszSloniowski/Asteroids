import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        declarations: [NavComponent],
        imports: [
            CommonModule,
            RouterModule,
            NgbModule
        ],
        exports: [NavComponent]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map