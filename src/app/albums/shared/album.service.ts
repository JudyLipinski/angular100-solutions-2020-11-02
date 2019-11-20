import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of  } from 'rxjs';
import { Album } from '../album.model';
import { catchError} from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class AlbumService {
     url = "http://localhost:4445/albums";

     constructor(private http: HttpClient) { }

     getAlbums(): Observable<Album[]> {
          return this.http.get<Album[]>(this.url);
     }

     getAlbumById(id: number): Observable<Album> {
      return this.http.get<Album>(this.url + "/" + id);
    }

    addAlbum(album: Album): Observable<Album> {
     return this.http.post<Album>(this.url, album);
   }

   updateAlbum(album: Album): Observable<Album> {
     console.log('in update service',album)
     let newUrl = `${this.url}/${album.id}`;
     console.log('newUrl',newUrl)
     return this.http.put<Album>(newUrl, album)
      .pipe(
        catchError(this.handleError('update',album))
      );
   }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
