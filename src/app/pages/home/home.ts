import { Component } from '@angular/core';
import { Conference } from '../../models/conference';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [FormsModule, UpperCasePipe,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string;
  list: Conference[];
  searchTitle: string;
  //1ere méthode qui sera exécuté
  constructor() {
    //Service
  }
  //2eme méthode qui sera exécuté
  ngOnInit() {
    this.list = [
      {
        title: 'conference Angular',
        description: 'web dev conference and workshop',
        date: '12-06-2026',
        nbrMax: 20,
        nbrReservation: 19,
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsLpG4XU-XBILfZ4eWvruQgMP8Conk3TcXIJRSX7RCw&s=10'
      },

      {
        title: 'React Event',
        description: 'frontend conference and hands-on workshop',
        date: '23-11-2026',
        nbrMax: 30,
        nbrReservation: 30,
        Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvn0vNnfrRkyIqVuyt-v9VA5zCcgMd2YAautY5FI2mAg&s=10'
      },

    ];
  }
}

