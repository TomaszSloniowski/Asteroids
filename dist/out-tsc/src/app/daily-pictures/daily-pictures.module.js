import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { DailyPicturesListComponent } from './daily-pictures-list/daily-pictures-list.component';
import { DailyPictureDetailsComponent } from './daily-picture-details/daily-picture-details.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularWebStorageModule } from 'angular-web-storage';
let DailyPicturesModule = class DailyPicturesModule {
};
DailyPicturesModule = tslib_1.__decorate([
    NgModule({
        declarations: [DailyPicturesListComponent, DailyPictureDetailsComponent],
        imports: [
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            AngularWebStorageModule
        ],
        exports: [DailyPicturesListComponent, DailyPictureDetailsComponent]
    })
], DailyPicturesModule);
export { DailyPicturesModule };
//# sourceMappingURL=daily-pictures.module.js.map