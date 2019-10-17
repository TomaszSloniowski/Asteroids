import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavComponent]
})
export class CoreModule { }
