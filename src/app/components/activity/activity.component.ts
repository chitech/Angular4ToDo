import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  albums: Album[];
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => {
      // console.log(albums);
      this.albums = albums; 
  
    })
  }

}
//Model for the data

interface Album {
  id: number,
  title: string
  thumbnailUrl: string
}
