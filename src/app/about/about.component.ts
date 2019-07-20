import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `

  <div class="container">
  <div class="jumbotron my-5 mx-5 ">
    <h1 class="display-4">Welcome to {{ title }}!</h1>
    <p class="lead">View and Add albums
    </p>
    <button
        type="button"
        routerLink="/albums"
        class="btn btn-primary text-center mt-3 mx-auto"
      >
        View Albums
      </button>
  </div>
</div>


  `,
  styles: []
})
export class AboutComponent implements OnInit {
  title = "My Angular Albums";

  constructor() {}

  ngOnInit() {}
}
