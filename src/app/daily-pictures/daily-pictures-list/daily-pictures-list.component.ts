import { Component, OnInit } from '@angular/core';
import { DailyPicturesService } from '../daily-pictures.service';
import { searchFormSettings } from '../searchform-settings';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-daily-pictures-list',
  templateUrl: './daily-pictures-list.component.html',
  styleUrls: ['./daily-pictures-list.component.scss']
})
export class DailyPicturesListComponent implements OnInit {

  pictureOfDay;
  PicturesOfDay;
  keywordValue: string = null;
  checkboxListValues = [];

    /*-------- Search form --------*/
    originalSearchFormSettings : searchFormSettings = {
      keyword: ''
  //  planetsName: null,
  //  date: null
  };

  FormSettings : searchFormSettings = { ...this.originalSearchFormSettings };

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
    private service: DailyPicturesService
  ) { }

  ngOnInit() {
    this.service.getPicturesMonth()
    this.PicturesOfDay = this.service.getPicturesList()
    console.log('Pictures of the day: ', this.PicturesOfDay)
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.keywordValue = this.FormSettings.keyword;

    console.log(this.keywordValue)
  }

}
