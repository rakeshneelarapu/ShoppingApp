import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedin: boolean = false;
  constructor() { }

  login(user: User) {
    if (user.userName === 'admin' && user.password === 'admin') {
      this.isLoggedin = true;
      return true;
    } else {
      return false;
    }
  }
}
