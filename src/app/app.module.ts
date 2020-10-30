import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    ReverseStrPipe,
    WelcomeComponent,
    NavbarComponent,
    NotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
