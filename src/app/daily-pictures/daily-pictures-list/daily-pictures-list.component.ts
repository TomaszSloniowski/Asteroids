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
  keywordValue: string = 'keyword';
  selectedMonth: string;
  selectedYear: string;
  checkboxListValues = [];

    /*-------- Search form --------*/
    originalSearchFormSettings : searchFormSettings = {
      keyword: 'keyword',
      year: "2019",
      month: "7",
      searchInTitle: true,
      searchInExplanation: true

  //  planetsName: null,
  //  date: null
  };
  
  FormSettings : searchFormSettings = { ...this.originalSearchFormSettings };

    /*--------- Planets menu --------*/
    checkboxList = {
      Mercury: false,
      Venus: false,
      Earth: true,
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
    
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.selectedYear = this.FormSettings.year;
    this.selectedMonth = this.FormSettings.month;
    this.service.getPicturesMonth(this.selectedYear,this.selectedMonth)
    this.keywordValue = this.FormSettings.keyword;
    this.PicturesOfDay = this.service.getPicturesList()
    console.log('Pictures of the day: ', this.PicturesOfDay)
    console.log ("Search in title: ", this.FormSettings.searchInTitle)
    console.log ("Search in explanation: ", this.FormSettings.searchInExplanation)
    console.log(this.keywordValue)
  }
}
