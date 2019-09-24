import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable }     from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsService {


  private AsteroidsUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-18&end_date=2019-07-18&api_key=zd6kRT5AcbM5cDS6Gwb71YdfgYTXVXn5oyJGwEHp'


  constructor(
    private http: HttpClient
  ) { }

  getAsteroids() {
    let x = { date: '2019-7-1' }
    return this.http.get<any>(this.AsteroidsUrl, { params: x })
  }

}

