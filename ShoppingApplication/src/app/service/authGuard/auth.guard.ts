import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(sessionStorage.isLoggedin);
    // let isLoggedin = sessionStorage.isLoggedin as boolean;
    if (this.loginService.isLoggedin === true) { // Using Session Storage
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
