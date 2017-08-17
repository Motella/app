import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];
  likes:number;
  dislikes :number;
  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'پیراهن و سارافن مجلسی',
        like:12,
        dislike:2
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'مانتو و پالتو مجلسی',
        like:25,
        dislike:2
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'دامن و شلوار مجلسی',
        like:7,
        dislike:2
      }
    ];
    this.likes = 12;
    this.dislikes =1;
  }
  LikeIt(item) {
    item.like ++;
  }
  DislikeIt(item) {
    item.dislike ++;
  }
}
