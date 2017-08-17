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
          avatar: 'assets/img/cards/Anarkalisuit_1.jpg',
          name: 'پیراهن'
        },
        date: 'November 5, 1955',
        image: 'assets/img/cards/Anarkalisuit_1.jpg',
        content: 'پیراهن',
        like:12,
        dislike:2,
        comment:2
      },
      {
        user: {
          avatar: 'assets/img/cards/kaftan_1-450x480.jpg',
          name: 'سارافن'
        },
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
        user: {
          avatar: 'assets/imgcards/kaftan_1-450x480.jpeg',
          name: 'پالتو'
        },
        date: 'May 12, 1984',
        image: 'assets/img/cards/kaftan_1-450x480.jpg',
        content: 'پالتو',
        like:25,
        dislike:2,
        comment:1
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'شلوار'
        },
        date: 'June 28, 1990',
        image: 'assets/img/cards/Plazzo_1.jpg',
        content: 'شلوار',
        like:7,
        dislike:2,
        comment:4
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'دامن'
        },
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
