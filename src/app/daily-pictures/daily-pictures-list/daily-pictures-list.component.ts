import { Component, OnInit } from '@angular/core';
import { DailyPicturesService } from '../daily-pictures.service';
import { searchFormSettings } from '../searchform-settings';
import { NgForm, NgModel } from '@angular/forms';
import { IPicture } from '../picture';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-daily-pictures-list',
  templateUrl: './daily-pictures-list.component.html',
  styleUrls: ['./daily-pictures-list.component.scss']
})
export class DailyPicturesListComponent implements OnInit {

  pictureOfDay: IPicture;
  $picturesOfDay: Observable<IPicture[]>
  // picturesOfDay: IPicture[];
  keywordValue: string = null;
  selectedMonth: number;
  selectedYear: number;
  checkboxListValues = [];
  errorMessage: string;
  dateList = [];
  newDates = [];
  user: string = '';

  /*-------- Search form --------*/
    FormSettings: searchFormSettings = {
    keyword: null,
    year: 2019,
    month: null,
    searchInTitle: true,
    searchInExplanation: true
  }; 

/*
  FormSettings: searchFormSettings;   */

  /*= { ...this.originalSearchFormSettings }; */

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

  constructor(private service: DailyPicturesService,
    public session: SessionStorageService
  ) { }

  ngOnInit() {
    this.FormSettings.year = this.session.get('year');
    this.FormSettings.month = this.session.get('month');
    this.FormSettings.keyword = this.session.get('keyword');
    this.dateList = JSON.parse(this.session.get('dates'));
    this.$picturesOfDay = this.service.getPicturesList(this.dateList);
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.selectedYear = this.FormSettings.year;
    this.selectedMonth = this.FormSettings.month;
    this.keywordValue = this.FormSettings.keyword;
    this.newDates = this.service.getPicturesMonth(this.selectedYear, this.selectedMonth)
    this.$picturesOfDay = this.service.getPicturesList(this.newDates);
    this.dateList = this.newDates
    this.session.set('year', this.selectedYear);
    this.session.set('month', this.selectedMonth);
    this.session.set('dates', JSON.stringify(this.dateList));
    this.session.set('keyword', this.keywordValue);
  }
}
