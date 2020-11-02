import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private router: Router){}

  public redirectUrl = '';
  isLoggedIn = false;
  @Output() getLoggedInStatus: EventEmitter<boolean> = new EventEmitter();

   login(username: string, password: string): Observable<boolean> {
      if (username === 'user' && password === 'root') {
          this.getLoggedInStatus.emit(true);
          this.isLoggedIn = true;
          localStorage.setItem('loggedin', 'true');
          return of(true);
      } else {
          this.isLoggedIn = false;
          this.getLoggedInStatus.emit(false);
          return of(false);
      }
  }

  logout(): void {
      this.getLoggedInStatus.emit(false);
      this.isLoggedIn = false;
      console.log('logging out user');
      localStorage.removeItem('loggedin');
      this.router.navigate(['./login']);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}
