import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { AboutComponent } from "./about/about.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  { path: "welcome", component: WelcomeComponent },
  //  { path: "about", component: AboutComponent },

  {
    path: "about",
    loadChildren: () => import('./about/about.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.AboutModule;
      })
  },

  // Before Angular 8
  // { path: "about", loadChildren: './about/about.module#AboutModule' },



  // { path: "albums", component: AlbumListComponent },
  {
    path: "albums", //Angular 8 Notation with Promise
    canActivate: [AuthGuard],
    loadChildren: () => import('./albums/albums.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.AlbumsModule;
      }),
  },
  // //Before Angular 8
  // { path: "observables", loadChildren: './observables/observables.module#ObservablesModule' },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
