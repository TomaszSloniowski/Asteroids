import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;
  user: string = '';

  constructor(
    //private route: ActivatedRoute,
    private us: UserService,
    public session: SessionStorageService
  ) { }

  ngOnInit() {
    this.us.isLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      this.user = this.session.get('email');
      console.log('user: ', this.user);
    });
  }

}
