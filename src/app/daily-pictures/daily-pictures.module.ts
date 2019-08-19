import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { DailyPicturesListComponent } from './daily-pictures-list/daily-pictures-list.component';
import { DailyPictureDetailsComponent } from './daily-picture-details/daily-picture-details.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DailyPicturesListComponent, DailyPictureDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:
  [DailyPicturesListComponent, DailyPictureDetailsComponent]
})
export class DailyPicturesModule { }
