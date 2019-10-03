import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AlbumService } from "../album.service";
import { Album } from "../album.model";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    this.albumService.getAlbumById(id).subscribe(
      album => {
        this.album = album;
      },
      error => console.log("Error: ", error)
    );


  }
}
