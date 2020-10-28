import { Injectable } from "@angular/core";
import { Album } from '../album.model';

import { ALBUMS } from "../albums.data";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  constructor() {}

  getAlbums(): Album[] {
    return ALBUMS;
  }
}
