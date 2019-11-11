import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  
  constructor(public _data: DataService) { }
  songList = this._data.playlistOne;
  songListTwo = this._data.playlistTwo;
}
