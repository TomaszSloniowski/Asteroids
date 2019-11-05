import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AsteroidsListComponent } from './asteroids-list/asteroids-list.component';
import { AsteroidsDetailsComponent } from './asteroids-details/asteroids-details.component';
import { routes } from './asteroids.routing';
let AsteroidsModule = class AsteroidsModule {
};
AsteroidsModule = tslib_1.__decorate([
    NgModule({
        declarations: [AsteroidsListComponent, AsteroidsDetailsComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgbModule,
            RouterModule,
            RouterModule.forChild(routes)
        ],
        exports: [AsteroidsListComponent, AsteroidsDetailsComponent]
    })
], AsteroidsModule);
export { AsteroidsModule };
//# sourceMappingURL=asteroids.module.js.map