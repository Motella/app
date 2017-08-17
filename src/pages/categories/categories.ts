import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  cardItems: any[];
  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/cards/Anarkalisuit_1.jpg',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/cards/Anarkalisuit_1.jpg',
        content: 'پیراهن و سارافن مجلسی',
        like:12,
        dislike:2,
        comment:2
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/cards/kaftan_1-450x480.jpg',
        content: 'مانتو و پالتو مجلسی',
        like:25,
        dislike:2,
        comment:1
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/cards/Plazzo_1.jpg',
        content: 'دامن و شلوار مجلسی',
        like:7,
        dislike:2,
        comment:4
      }
    ];
  }
}
