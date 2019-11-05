import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DailyPicturesService } from '../daily-pictures.service';
import { SearchFormSettings } from '../searchform-settings';
import { SessionStorageService } from 'angular-web-storage';
// import { ActivatedRoute } from '@angular/router';
let DailyPicturesListComponent = class DailyPicturesListComponent {
    constructor(service, session) {
        this.service = service;
        this.session = session;
        /*-------- Search form --------*/
        this.years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
        this.months = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
        this.FormSettings = new SearchFormSettings(null, this.years[0], this.months[8], true, true);
        this.checkboxListValues = [];
        this.dateList = [];
        this.newDates = [];
        this.filterByDetail = false;
        this.filterByThumbnail = false;
    }
    ngOnInit() {
        this.FormSettings.year = this.session.get('year');
        this.FormSettings.month = this.session.get('month');
        //  this.FormSettings.keyword = this.session.get('keyword');
        //  this.FormSettings.searchInTitle = this.session.get('searchInTitle');
        //  this.FormSettings.searchInExplanation = this.session.get('searchInExplanation');
        this.dateList = JSON.parse(this.session.get('dates'));
        this.$picturesOfDay = this.service.getPicturesList(this.dateList);
    }
    onBlur(field) {
        console.log('in onBlur: ', field.valid);
    }
    onSubmit(form) {
        console.log('in onSubmit: ', form.valid);
        this.selectedYear = this.FormSettings.year;
        this.selectedMonth = this.FormSettings.month;
        this.keywordValue = this.FormSettings.keyword;
        this.newDates = this.service.getPicturesMonth(this.selectedYear, this.selectedMonth);
        this.$picturesOfDay = this.service.getPicturesList(this.newDates);
        this.dateList = this.newDates;
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
};
DailyPicturesListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-daily-pictures-list',
        templateUrl: './daily-pictures-list.component.html',
        styleUrls: ['./daily-pictures-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DailyPicturesService,
        SessionStorageService])
], DailyPicturesListComponent);
export { DailyPicturesListComponent };
//# sourceMappingURL=daily-pictures-list.component.js.map