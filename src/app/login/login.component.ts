import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  login() {
    this.authService.login('user', 'root');
    if (!this.authService.redirectUrl) {
      this.authService.redirectUrl = '/welcome';
    }
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  logout() {
    this.authService.logout();
    this.authService.redirectUrl = '/login';
  }

}
