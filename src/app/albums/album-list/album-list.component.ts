import { Component, OnInit } from "@angular/core";

import { AlbumService } from "../shared/album.service";
import { Album } from "../album.model";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
   }

   parentFunctionHandler(album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
  }

  getAlbums() {
    this.albumService.getAlbums()
    .subscribe(
        albums => this.albumsArray = albums,
        error => console.log("Error: ", error));
  }
}
