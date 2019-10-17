import { Component, OnInit } from '@angular/core';
import { DailyPicturesService } from '../daily-pictures.service';
import { searchFormSettings } from '../searchform-settings';
import { NgForm, NgModel } from '@angular/forms';
import { IPicture } from '../picture';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';
//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-daily-pictures-list',
  templateUrl: './daily-pictures-list.component.html',
  styleUrls: ['./daily-pictures-list.component.scss']
})
export class DailyPicturesListComponent implements OnInit {


  /*-------- Search form --------*/

  years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];

  FormSettings = new searchFormSettings(null, this.years[0], this.months[8], true, true);

  pictureOfDay: IPicture;
  $picturesOfDay: Observable<IPicture[]>
  keywordValue: string;
  selectedMonth: number;
  selectedYear: number;
  checkboxListValues = [];
  errorMessage: string;
  dateList = [];
  newDates = [];
  filterByDetail: boolean = false;
  filterByThumbnail: boolean = false;


  /*--------- Planets menu --------*/
  /*checkboxList = {
    Mercury: false,
    Venus: false,
    Earth: false,
    Mars: false,
    Jupiter: false,
    Saturn: false,
    Uran: false,
    Neptun: false,
    Pluto: false,
    Sun: false,
    Moon: false,
  }; */

  constructor(private service: DailyPicturesService,
    public session: SessionStorageService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.FormSettings.year = this.session.get('year')
    this.FormSettings.month = this.session.get('month');
    //  this.FormSettings.keyword = this.session.get('keyword');
    //  this.FormSettings.searchInTitle = this.session.get('searchInTitle');
    //  this.FormSettings.searchInExplanation = this.session.get('searchInExplanation');
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

  getDetailView() {
    this.filterByDetail = !this.filterByDetail;
    this.filterByThumbnail = false;
  }
  getThView() {
    this.filterByThumbnail = !this.filterByThumbnail;
    this.filterByDetail = false;
  }
}
