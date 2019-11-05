import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DailyPicturesListComponent } from './daily-pictures/daily-pictures-list/daily-pictures-list.component';
import { DailyPictureDetailsComponent } from './daily-pictures/daily-picture-details/daily-picture-details.component';
const routes = [
    { path: 'daily-pictures', component: DailyPicturesListComponent },
    { path: '', redirectTo: 'daily-pictures', pathMatch: 'full' },
    { path: 'daily-picture-details/:date', component: DailyPictureDetailsComponent },
    { path: 'asteroids', loadChildren: () => import('./asteroids/asteroids.module').then(m => m.AsteroidsModule) },
    { path: 'user', loadChildren: () => import('./core/user/user.module').then(m => m.UserModule) },
    { path: '**', redirectTo: 'daily-pictures' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map