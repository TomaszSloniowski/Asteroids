import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyPicturesListComponent } from './daily-pictures/daily-pictures-list/daily-pictures-list.component';
import { AsteroidsListComponent } from './asteroids/asteroids-list/asteroids-list.component';
import { UserComponent } from './user/user/user.component'

const routes: Routes = [
  { path: 'daily-pictures', component: DailyPicturesListComponent },
  { path: 'asteroids', component: AsteroidsListComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'daily-pictures', pathMatch: 'full' },
//  { path: '**', redirectTo: 'daily-pictures' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
