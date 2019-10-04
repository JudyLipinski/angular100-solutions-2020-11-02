import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../shared/album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
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


