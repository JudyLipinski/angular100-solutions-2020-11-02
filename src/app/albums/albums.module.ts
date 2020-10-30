import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumCardComponent } from "./album-card/album-card.component";
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';


@NgModule({
  declarations: [ AlbumListComponent,
    AlbumCardComponent,
    AlbumDetailsComponent,
    AlbumEditComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
