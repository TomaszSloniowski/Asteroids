import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DailyPicturesService {

  private PictureOfDayUrl = 'https://api.nasa.gov/planetary/apod?api_key=zd6kRT5AcbM5cDS6Gwb71YdfgYTXVXn5oyJGwEHp'

  newDates = [];
  picture: any;

  constructor(private http: HttpClient
    ) { }

    getPicturesMonth() {
      var startDate = new Date("2019-7-01");
      var endDate = new Date("2019-7-10");
      var getDateArray = function(start, end) {
          var newDates = new Array();
          var newDate = new Date(start);
          while (newDate <= end) {
            newDates.push(newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDate());
            newDate.setDate(newDate.getDate() + 1);
          }
          console.log('dates: ', newDates);
          return newDates;
      }
      this.newDates = getDateArray(startDate, endDate);
      }

      getPicturesList() {
        let x;
        let picturesOfDay = [];
        for (let i = 1; i <= this.newDates.length; i++) {
          x = { date: this.newDates[i] }
          this.http.get<any>(this.PictureOfDayUrl, { params: x }).subscribe((picture) => {
            this.picture = picture;
            picturesOfDay.push(this.picture)
           });
        }
        console.log('Pictures of Day: ', picturesOfDay);
        return picturesOfDay;
      }

}