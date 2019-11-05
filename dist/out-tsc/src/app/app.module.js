import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { AsteroidsModule } from './asteroids/asteroids.module';
import { UserModule } from './core/user/user.module';
import { DailyPicturesModule } from './daily-pictures/daily-pictures.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            CoreModule,
            AsteroidsModule,
            DailyPicturesModule,
            UserModule,
            AngularWebStorageModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map