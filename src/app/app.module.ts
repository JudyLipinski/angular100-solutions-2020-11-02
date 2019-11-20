import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from "@angular/forms";  

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumsModule } from './albums/albums.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [BrowserModule, 
    //FormsModule,
     HttpClientModule, AppRoutingModule,
    AlbumsModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
