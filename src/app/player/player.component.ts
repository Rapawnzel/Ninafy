/*
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

*/


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss', './player.component.css']
})

export class PlayerComponent implements OnInit {
  //SongTime
  @ViewChild('progressBar', {static: true}) progress: ElementRef;
  @ViewChild('progressBarStatus', {static: true}) progressStatus: ElementRef;
  private progressBar: HTMLElement;
  private progressBarStatus: HTMLElement;
  //Volume
  @ViewChild('volumeBar', {static: true}) volume: ElementRef;
  @ViewChild('volumeStatus', {static: true}) volumeStatus: ElementRef;
  private volumeBar: HTMLElement;
  private volumeStatusBar: HTMLElement;
  
  //Play
  @ViewChild('audio', {static: true}) audio: ElementRef;
  private isPlaying: boolean = false;
  private audioContainer: HTMLAudioElement;
  private nowPlayingSongId: number;
  private currentVolume: number = 1;

  public songList: ISongInfo[] = [
    {
      "id": 0,
      "name": "Hurt Again",
      "artist": "Julia Michaels",
      "cover": "/assets/images/hurt-again.png",
      "src": "/assets/music/hurt-again.mp3"
    },
    {
      "id": 1,
      "name": "We Are ...",
      "artist": "Noah Cyrus, MØ",
      "cover": "/assets/images/we-are.jpg",
      "src": "/assets/music/we-are.mp3"
    },
    {
      "id": 2,
      "name": "Older",
      "artist": "Sasha Sloan",
      "cover": "/assets/images/older.jpg",
      "src": "/assets/music/older.mp3"
    },
    {
      "id": 3,
      "name": "Worst In Me",
      "artist": "Julia Michaels",
      "cover": "/assets/images/worst-in-me.jpg",
      "src": "/assets/music/worst-in-me.mp3"
    },
    {
      "id": 4,
      "name": "Memories",
      "artist": "Maroon 5",
      "cover": "/assets/images/memories.jpg",
      "src": "/assets/music/memories.mp3"
    },
    {
      "id": 5,
      "name": "July",
      "artist": "Noah Cyrus",
      "cover": "/assets/images/july.jpg",
      "src": "/assets/music/july.mp3"
    }
  ];
  id:number;
  public playingSong: ISongInfo;

  constructor(public _data: DataService, public _path: ActivatedRoute) { 
    this.id = this._path.snapshot.params.id;
    //this.playingSong = this._data.playlistOne;
    this.playingSong = this.songList[this.id];
  }
  
  /*
   id:number;
  listOfSongs : object;
  public playingSong: object;

  constructor(public _data: DataService, public _path: ActivatedRoute) { 
    this.id = this._path.snapshot.params.id;
    this.listOfSongs = this._data.playlistOne["listOfSongs"];
    //this.playingSong = this._data.playlistOne["id"]
    this.playingSong = this.songList["id"];
  }*/

  ngOnInit(): void {
    //songTime
    this.progressBar = this.progress.nativeElement;
    this.progressBarStatus = this.progressStatus.nativeElement;
    // volume
    this.volumeBar = this.volume.nativeElement;
    this.volumeStatusBar = this.volumeStatus.nativeElement;
    // song
    this.audioContainer = this.audio.nativeElement;
    this.setSongInfo();
  }

  playSong(): void {
    if (this.isPlaying) {
      this.pauseSong();
      return;
    }

    this.isPlaying = true;
    setTimeout(() => {
      this.audioContainer.play();
    });
  }

  pauseSong(): void {
    this.audioContainer.pause();
    this.isPlaying = false;
  }

  setSongInfo(id: number = 0): void {
    this.nowPlayingSongId = id;
    this.playingSong = this.songList[id];
    this.playingSong.duration = this.audioContainer.duration;
    // this.playingSong.currentTime = this.audioContainer.currentTime;
  }

  playNextSong(): void {
    this.pauseSong();
    if (this.nowPlayingSongId < this.songList.length) {
      this.setSongInfo(++this.nowPlayingSongId);
    } else {
      this.setSongInfo();
    }
    this.playSong();
  }

  playPreviousSong(): void {
    this.pauseSong();
    if (this.nowPlayingSongId > 0) {
      this.setSongInfo(--this.nowPlayingSongId);
    } else {
      this.setSongInfo();
    }
    this.playSong();
  }

  playSelectedSong(selectedSongId: number): void {
    this.pauseSong();
    this.setSongInfo(selectedSongId);
    this.playSong();
  }

  setVolume(volume: number): void {
    this.audioContainer.volume = volume;
  }

  setCurrentVolume(volume: number): void {
    this.currentVolume = volume;
  }

  muteSong(): void {
    if (this.audioContainer.volume) {
      this.setVolume(0);
      this.changeVolumeBarStatus(0);
    } else {
      this.setVolume(this.currentVolume);
      this.changeVolumeBarStatus(this.currentVolume * 100);
    }
  }

  changeVolumeBarStatus(persentage: number): void {
    this.volumeStatusBar.style.width = `${persentage}%`;
  }

  handChangeVolume(event: MouseEvent): void {
    const volumeBarProperty = this.volumeBar.getBoundingClientRect();
    const mousePosition = event.pageX - volumeBarProperty.left + pageXOffset;
    const volumePersentage = mousePosition * 100 / volumeBarProperty.width;
    this.changeVolumeBarStatus(volumePersentage);
    this.setCurrentVolume(volumePersentage / 100);
    this.setVolume(this.currentVolume);
  }

  getCurrentSongDuration(): number {
    return this.audioContainer.duration;
  }

  setCurrentSongTime(time: number): void {
  this.audioContainer.currentTime = time;
  }

  getCurrentSongTime(): number {
    return this.audioContainer.currentTime;
  }

  changeSongBarStatus(persentage: number): void {
    this.progressBarStatus.style.width = `${persentage}%`;
  }

  handChangeCurrentSongTime(event: MouseEvent): void {
    const progressBarProperty = this.progressBar.getBoundingClientRect();
    const mousePosition = event.pageX - progressBarProperty.left + pageXOffset;
    const currentSongTimePersentage = mousePosition * 100 / progressBarProperty.width;
    this.changeSongBarStatus(currentSongTimePersentage);
    this.setCurrentSongTime(this.playingSong.duration * currentSongTimePersentage / 100);
  }
}

interface ISongInfo {
  id,
  duration?,
  name,
  artist,
  cover,
  src
} 