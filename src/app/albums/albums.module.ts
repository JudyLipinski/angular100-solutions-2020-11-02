import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumCardComponent } from "./album-card/album-card.component";


@NgModule({
  declarations: [ AlbumListComponent,
    AlbumCardComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { }
