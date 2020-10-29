import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";
import { AlbumService } from '../shared/album.service';

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];

  constructor(private albumService: AlbumService) { };

  parentFunctionHandler(album: Album): void {
    alert('Album ' + album.albumName + ' was sent from the album card component');
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums()
    .subscribe(
        albums => this.albumsArray = albums,
        error => console.log("Error: ", error));
}
}
