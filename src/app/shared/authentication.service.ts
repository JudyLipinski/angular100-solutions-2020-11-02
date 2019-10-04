import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private router: Router){}

  public redirectUrl = '';
  isLoggedIn = false;
  @Output() getLoggedInStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.isLoggedIn = (localStorage.getItem('loggedin')) ? true : false;
  }

  login({email, password}): boolean {

    
      if (email === 'test@test.com' && password === 'abcd1234') {
        console.log('valid login');
          this.getLoggedInStatus.emit(true);
          this.isLoggedIn = true;
          localStorage.setItem('loggedin', 'true');
          return true;
      } else {
        console.log('invalid login');
          this.isLoggedIn = false;
          this.getLoggedInStatus.emit(false);
          return false;
      }
  }

  logout(): void {
      this.getLoggedInStatus.emit(false);
      this.isLoggedIn = false;
      console.log('logging out user');
      localStorage.removeItem('loggedin');
      this.router.navigate(['./login']);
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

}
