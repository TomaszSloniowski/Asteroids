import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { AsteroidsListComponent } from './asteroids-list/asteroids-list.component';
import { AsteroidsDetailsComponent } from './asteroids-details/asteroids-details.component';

@NgModule({
  declarations: [AsteroidsListComponent, AsteroidsDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports:
    [AsteroidsListComponent, AsteroidsDetailsComponent]
})
export class AsteroidsModule { }
