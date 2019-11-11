import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  id : number; 
  songList: object[];
  
  constructor(public _path: ActivatedRoute, public _data: DataService) { 
    this.id = this._path.snapshot.params.id;
    this.songList = this._data.playlistOne["listOfSongs"];
    console.log(this.songList[this.id]["name"])
  }

}
