import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable }     from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
let AsteroidsService = class AsteroidsService {
    constructor(http) {
        this.http = http;
        // tslint:disable-next-line: max-line-length
        this.AsteroidsUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-18&end_date=2019-07-18&api_key=zd6kRT5AcbM5cDS6Gwb71YdfgYTXVXn5oyJGwEHp';
    }
    getAsteroids() {
        const x = { date: '2019-7-1' };
        return this.http.get(this.AsteroidsUrl, { params: x });
    }
};
AsteroidsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AsteroidsService);
export { AsteroidsService };
//# sourceMappingURL=asteroids.service.js.map