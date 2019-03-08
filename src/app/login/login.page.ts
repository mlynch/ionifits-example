import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public user: UserService, public router: Router) {
    user.userStateChanged$.subscribe(userState => {
      console.log('User login state', userState);
      console.log(router.config);
      if (userState.user) {
        router.navigate(['app/tabs'])
      }
    });
  }

  ngOnInit() {
  }

}
