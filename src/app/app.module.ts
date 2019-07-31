import { BrowserModule } from '@angular/platform-browser';
import { AsteroidsModule } from './asteroids/asteroids.module';
import { UserModule } from './user/user.module';
import { DailyPicturesModule } from './daily-pictures/daily-pictures.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
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
    UserModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
