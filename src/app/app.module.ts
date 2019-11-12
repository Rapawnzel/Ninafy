import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlayerComponent } from './player/player.component';
import { DataService } from './service/data.service';
import { SidebarComponent } from './sidebar/sidebar.component';


import { RouterModule, Routes } from '@angular/router';

const routerConfig: Routes = [  
{"path" : "", "component" : SongListComponent}, 
{"path" : "home", "component" : SongListComponent}, 
{"path" : "play/:id", "component" : PlayerComponent},  
{"path" : "**", "component" : SongListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlayerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig,{useHash:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
