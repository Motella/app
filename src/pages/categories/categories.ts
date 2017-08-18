import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FabricsPage} from '../fabrics/fabrics';
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  cardItems: any[];
  item : any;
  constructor(public navCtrl: NavController) {
    this.item = {};
    this.cardItems = [
      {
        image: 'assets/img/cards/Anarkalisuit_1.jpg',
        content: 'پیراهن',
        like:12,
        dislike:2,
        comment:2
      },
      {
        image: 'assets/img/cards/kaftan_1-450x480.jpg',
        content: 'سارافن',
        like:12,
        dislike:2,
        comment:2
      },
      {
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
        image: 'assets/img/cards/Plazzo_1.jpg',
        content: 'شلوار',
        like:7,
        dislike:2,
        comment:4
      },
      {
        image: 'assets/img/cards/skirt_1.jpg',
        content: 'دامن',
        like:7,
        dislike:2,
        comment:4
      }];
  }
  nextStep(selectedItem) {
    this.item.category = selectedItem;
    this.navCtrl.push(FabricsPage, {
      item: this.item
    });
  }
}
