import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { AlbumCardComponent } from "./albums/album-card/album-card.component";
import { AlbumService } from "./albums/album.service";
import { AlbumDetailsComponent } from "./albums/album-details/album-details.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AddAlbumComponent } from "./albums/add-album/add-album.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    AlbumDetailsComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    AddAlbumComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {}
