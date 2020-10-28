import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  newPrice: number;

  @Input()
  album: Album;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  ngOnInit(): void {
    if (this.album.isOnSale) {
      // Apply 10% discount
      this.newPrice = this.album.price - (this.album.price * .10);
      }
  }

  showAlbum(): void {
    this.albumClicked.emit(this.album);
  }

}
