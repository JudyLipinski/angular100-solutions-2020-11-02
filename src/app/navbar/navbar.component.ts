import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title = "My Albums Project";
  loggedIn = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.getLoggedInStatus.subscribe(status => this.loggedIn=status);
  }

  logout() {
    this.loggedIn = false;
    this.authService.logout();
  }
}
