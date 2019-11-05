import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DailyPicturesService } from '../daily-pictures.service';
let DailyPictureDetailsComponent = class DailyPictureDetailsComponent {
    constructor(route, service, location) {
        this.route = route;
        this.service = service;
        this.location = location;
    }
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
};
DailyPictureDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-daily-picture-details',
        templateUrl: './daily-picture-details.component.html',
        styleUrls: ['./daily-picture-details.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        DailyPicturesService,
        Location])
], DailyPictureDetailsComponent);
export { DailyPictureDetailsComponent };
//# sourceMappingURL=daily-picture-details.component.js.map