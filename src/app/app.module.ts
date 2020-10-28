import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { ReverseStrPipe } from './reverse-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    ReverseStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
