import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../asteroids.service';
import { NgForm, NgModel } from '@angular/forms';
import { searchFormSettings } from '../searchform-settings'
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-asteroids-list',
  templateUrl: './asteroids-list.component.html',
  styleUrls: ['./asteroids-list.component.scss']
})
export class AsteroidsListComponent implements OnInit {

  asteroids: any;
  asteroidsNearEarth: any[];
  pictureOfDay;
  PicturesOfDay;
  keywordValue: string = null;
  
  /*-------- Search form --------*/
  originalSearchFormSettings : searchFormSettings = {
      keyword: ''
  //  planetsName: null,
  //  date: null
  };

  FormSettings : searchFormSettings = { ...this.originalSearchFormSettings };

/*------- Date picker ----------*/
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
/*------------------------------*/

/*--------- Planets menu --------*/
checkboxList = {
  Mercury: false,
  Venus: false,
  Earth: false,
  Mars: false,
  Jupiter: false,
  Saturn: false,
  Uran: false,
  Neptun: false,
  Pluton: false,
  Sun: false,
  Moon: false,
};

  constructor(
    private route: ActivatedRoute,
    private service: AsteroidsService,
    calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
   // this.service.getAsteroids().subscribe((asteroids) => {
   //   this.asteroids = asteroids;
     // this.asteroidsNearEarth = Object.entries(this.asteroids.near_earth_objects);
     // console.log('asteroids close approach: ', this.asteroids)
 //    });
/*
  this.service.getPicturesMonth()
  this.PicturesOfDay = this.service.getPicturesList()
  console.log('Pictures of Day from component: ', this.PicturesOfDay);
  console.log('Picture of day: ', this.PicturesOfDay)*/
}

onBlur(field : NgModel) {
  console.log('in onBlur: ', field.valid);
}

onSubmit(form: NgForm) {
  console.log('in onSubmit: ', form.valid);
  this.keywordValue = this.FormSettings.keyword;
  console.log(this.keywordValue)
}

/*------------ Date picker ---------------*/
onDateSelection(date: NgbDate) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}

isHovered(date: NgbDate) {
  return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
}

isInside(date: NgbDate) {
  return date.after(this.fromDate) && date.before(this.toDate);
}

isRange(date: NgbDate) {
  return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
}
/*---------------- Date picker --------------------*/


}

