import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if (this.authService.isUserLoggedIn()) {
        console.log("User is logged in");
        return true;
      }

      // set the attempted URL in the AuthService for redirecting after login
     this.authService.redirectUrl = state.url;

      // new way using UrlTree return type
     return this.router.createUrlTree(['./login']);

      // old way pre Angular 7.1
     // this.router.navigate(['./login']);

  }

}
