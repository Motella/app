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
        date: 'November 5, 1955',
        image: 'assets/img/cards/Anarkalisuit_1.jpg',
        content: 'پیراهن',
        like:12,
        dislike:2,
        comment:2
      },
      {
        date: 'November 5, 1955',
        image: 'assets/img/cards/kaftan_1-450x480.jpg',
        content: 'سارافن',
        like:12,
        dislike:2,
        comment:2
      },
      {
        user: {
          avatar: 'assets/img/Tunic_1-450x480.jpg',
          name: 'مانتو'
        },
        date: 'May 12, 1984',
        image: 'assets/img/cards/Tunic_1-450x480.jpg',
        content: 'مانتو',
        like:25,
        dislike:2,
        comment:1
      },
      {
        image: 'assets/img/cards/femaleshirt_1.jpg',
        content: 'شومیز',
        like:25,
        dislike:2,
        comment:1
      },
      {
        date: 'June 28, 1990',
        image: 'assets/img/cards/Plazzo_1.jpg',
        content: 'شلوار',
        like:7,
        dislike:2,
        comment:4
      },
      {
        date: 'June 28, 1990',
        image: 'assets/img/cards/skirt_1.jpg',
        content: 'دامن',
        like:7,
        dislike:2,
        comment:4
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
