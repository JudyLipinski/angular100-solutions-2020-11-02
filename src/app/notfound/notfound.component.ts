import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notfound",
  template: `
    <h1 class="mt-3 mx-auto w-50">Error 404</h1>
    <p class="mt-3 mx-auto w-50">Page not found</p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
