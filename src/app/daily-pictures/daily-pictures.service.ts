import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { IPicture } from './picture';
import { SessionStorageService } from 'angular-web-storage';


@Injectable({
  providedIn: 'root'
})
export class DailyPicturesService {

  private PictureOfDayUrl = 'https://api.nasa.gov/planetary/apod?api_key=zd6kRT5AcbM5cDS6Gwb71YdfgYTXVXn5oyJGwEHp';

  dateList = [];
  picturesList = [];
  picture: any;
  pictureDate: string;
  dailypicture: IPicture[];
  dt = new Date();
  daysInMonth: number;

  constructor(
    private http: HttpClient,
    public session: SessionStorageService
  ) { }

  getPicturesMonth(year: number, month: number) {
    console.log(this.dt);
    const m = month, y = year;
    // tslint:disable-next-line: triple-equals
    if (m == this.dt.getMonth() + 1 && (y == this.dt.getFullYear())) {
      this.daysInMonth = this.dt.getDate();
      console.log('October: ', this.dt.getDate());
    } else {
      this.daysInMonth = new Date(year, month, 0).getDate();
    }
    console.log('Days in month ', this.daysInMonth);
    const endDate = y + '-' + (m < 10 ? '0' + m : m) + '-' + this.daysInMonth;
    const startDate = y + '-' + (m < 10 ? '0' + m : m) + '-' + '01';

    console.log('start date: ', startDate);
    console.log('end date: ', endDate);

    const dateList = [];
    const dateMove = new Date(startDate);
    let strDate = startDate;

    while (strDate < endDate) {
      strDate = dateMove.toISOString().slice(0, 10);
      dateList.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }
    return dateList;
  }

  getPicturesList(dateList): Observable<IPicture[]> {
    if (this.session.get('startDate') !== dateList[0]) {
      this.picturesList = [];

      let x: { date: any; };
      for (let i = 0; i <= dateList.length; i++) {
        x = {
          date: dateList[i],
        };

        this.http.get<IPicture[]>(this.PictureOfDayUrl, { params: x }).subscribe(
          dailypicture => {
            this.dailypicture = dailypicture;
            this.picturesList.push(this.dailypicture);
          });
      }
      this.session.set('startDate', dateList[0]);
      // return this.picturesList
      return of(this.picturesList);
    } else {
      return of(this.picturesList);
    }

  }


  getPicture(pictureDate: string): Observable<IPicture> {
    const x = { date: pictureDate };
    return this.http.get<any>(this.PictureOfDayUrl, { params: x });
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
