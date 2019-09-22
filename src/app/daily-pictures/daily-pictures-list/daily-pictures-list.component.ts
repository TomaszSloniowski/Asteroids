import { Component, OnInit } from '@angular/core';
import { DailyPicturesService } from '../daily-pictures.service';
import { searchFormSettings } from '../searchform-settings';
import { NgForm, NgModel } from '@angular/forms';
import { IPicture } from '../picture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily-pictures-list',
  templateUrl: './daily-pictures-list.component.html',
  styleUrls: ['./daily-pictures-list.component.scss']
})
export class DailyPicturesListComponent implements OnInit {

  pictureOfDay: IPicture[];
 // PicturesOfDay: IPicture[] = [];
  $picturesOfDay: Observable<IPicture[]>

  keywordValue: string = 'keyword';
  selectedMonth: number;
  selectedYear: number;
  checkboxListValues = [];
  errorMessage: string;
  dateList = [];
  newDates = [];

    /*-------- Search form --------*/
    originalSearchFormSettings : searchFormSettings = {
      keyword: 'keyword',
      year: 2019,
      month: 9,
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

    constructor(private service: DailyPicturesService) { }

  ngOnInit() {
  // this.dateList = this.service.getCurrentMonthPictures()
  // this.PicturesOfDay = this.service.getPicturesList(this.dateList);
   this.$picturesOfDay = this.service.getPicturesList(this.dateList);
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.selectedYear = this.FormSettings.year;
    this.selectedMonth = this.FormSettings.month;
    this.keywordValue = this.FormSettings.keyword;
    this.newDates = this.service.getPicturesMonth(this.selectedYear,this.selectedMonth)
   // this.PicturesOfDay = this.service.getPicturesList(this.newDates)
   this.$picturesOfDay = this.service.getPicturesList(this.newDates);
   this.dateList = this.newDates

  }
}
