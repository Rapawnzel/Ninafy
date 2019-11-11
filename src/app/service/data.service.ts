import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  playlistOne = {
    "name": "Recently played",
    "listOfSongs": [
      {
        "id": 0,
        "name": "Hurt Again",
        "artist": "Julia Michaels",
        "imgurl": "/assets/images/hurt-again.png",
        "fileurl": ""
      },
      {
        "id": 1,
        "name": "We Are ...",
        "artist": "Noah Cyrus, MØ",
        "imgurl": "/assets/images/we-are.jpg",
        "fileurl": ""
      },
      {
        "id": 2,
        "name": "Older",
        "artist": "Sasha Sloan",
        "imgurl": "/assets/images/older.jpg",
        "fileurl": ""
      },
      {
        "id": 3,
        "name": "Worst In Me",
        "artist": "Julia Michaels",
        "imgurl": "/assets/images/worst-in-me.jpg",
        "fileurl": ""
      },
      {
        "id": 4,
        "name": "Memories",
        "artist": "Maroon 5",
        "imgurl": "/assets/images/memories.jpg",
        "fileurl": ""
      },
      {
        "id": 5,
        "name": "July",
        "artist": "Noah Cyrus",
        "imgurl": "/assets/images/july.jpg",
        "fileurl": ""
      }
    ]
  };

  playlistTwo = {
    "name": "Tu música de uso intensivo",
    "listOfSongs": [
      {
        "id": 0,
        "name": "Jealous",
        "artist": "Labrinth",
        "imgurl": "/assets/images/jealous.jpg",
        "fileurl": ""
      },
      {
        "id": 1,
        "name": "If The World Was Ending",
        "artist": "JP Saxe",
        "imgurl": "/assets/images/if-the-world.jpg",
        "fileurl": ""
      },
      {
        "id": 2,
        "name": "Lose You To Love Me",
        "artist": "Selena Gomez",
        "imgurl": "/assets/images/lose-you.jpg",
        "fileurl": ""
      },
      {
        "id": 3,
        "name": "Loved You Once",
        "artist": "Clara Mae",
        "imgurl": "/assets/images/loved-you.jpg",
        "fileurl": ""
      },
      {
        "id": 4,
        "name": "Deep End",
        "artist": "Birdy",
        "imgurl": "/assets/images/deep-end.jpg",
        "fileurl": ""
      },
      {
        "id": 5,
        "name": "Things I Say When You Sleep",
        "artist": "Nina Nesbitt",
        "imgurl": "/assets/images/things-i-say.jpg",
        "fileurl": ""
      }
    ]
  };
}
