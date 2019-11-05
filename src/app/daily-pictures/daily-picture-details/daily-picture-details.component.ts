import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DailyPicturesService } from '../daily-pictures.service';


@Component({
  selector: 'app-daily-picture-details',
  templateUrl: './daily-picture-details.component.html',
  styleUrls: ['./daily-picture-details.component.scss']
})
export class DailyPictureDetailsComponent implements OnInit {

  pictureDate: string;
  picture: any;

  constructor(
    private route: ActivatedRoute,
    private service: DailyPicturesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.pictureDate = this.route.snapshot.paramMap.get('date');
    console.log('Date from snapshot: ', this.pictureDate);
    this.service.getPicture(this.pictureDate).subscribe((picture) => {
      this.picture = picture;
      console.log('Selected picture from detail: ', this.picture);
    });
  }
  goBack() {
    this.location.back();
  }
}
