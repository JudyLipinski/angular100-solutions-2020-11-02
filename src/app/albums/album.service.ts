import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "./album.model";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  url = "http://localhost:4445/albums";

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.url + "/" + id);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.url, album);
  }

  removeAlbum(id: number): Observable<Album> {
    return this.http.delete<Album>(this.url + "/" + id);
  }
}
