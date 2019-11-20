import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <div><p>This app is written in Angular and displays music albums</p></div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "My Angular Albums";

}
