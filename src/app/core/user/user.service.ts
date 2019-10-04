import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Subscriber } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { SessionStorageService } from 'angular-web-storage';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  private logger = new Subject<boolean>();

  constructor(
    public session: SessionStorageService
  ) { }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logIn(email: string) {
    this.session.set('email', email);
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
  }

  logOut() {
    this.session.remove('email');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

}
