import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Angular Albums";
  myCounter = 1;

  ngOnInit(): void {
    const interval = setInterval(() => this.myCounter++, 2000);

    setTimeout(() => clearInterval(interval), 6000);
  }
}
