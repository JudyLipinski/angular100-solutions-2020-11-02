import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Album } from "../album.model";
import { AlbumService } from '../shared/album.service';

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Observable<Album[]>;

  constructor(private albumService: AlbumService) { };

  parentFunctionHandler(album: Album): void {
    alert('Album ' + album.albumName + ' was sent from the album card component');
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsArray = this.albumService.getAlbums();
  }
}
