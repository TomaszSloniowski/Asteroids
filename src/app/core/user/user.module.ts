import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './user.routing';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [UserComponent]

})
export class UserModule { }
