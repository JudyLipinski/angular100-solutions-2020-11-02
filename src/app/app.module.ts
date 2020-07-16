import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { AlbumCardComponent } from "./albums/album-card/album-card.component";
import { AlbumService } from "./albums/shared/album.service";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from './notfound/notfound.component';
// import { AddAlbumComponent } from './albums/add-album/add-album.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    // AddAlbumComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
