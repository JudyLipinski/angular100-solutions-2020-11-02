import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notfound",
  template: `
    <h1>Error 404</h1>
    <p>Page not found</p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
