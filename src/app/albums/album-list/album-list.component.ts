import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {


  ngOnInit(): void {
    console.log('This is called when the component is loaded');
  }
}
