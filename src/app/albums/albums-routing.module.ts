import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AlbumListComponent },
  // { path: ":id", component: AlbumDetailsComponent },
  // { path: ":id/edit", pathMatch: "full", component: AlbumEditComponent }

  { path: ":id", component: AlbumDetailsComponent,
    children: [
      { path: 'edit', component: AlbumEditComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AlbumsRoutingModule { }


