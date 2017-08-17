import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TailorDetailPage } from '../tailor-detail/tailor-detail';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-tailors',
  templateUrl: 'tailors.html'
})
export class TailorsPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  likeIt(item) {
    if (!item.liked){
       item.likes ++;
       item.liked = true;
      if (item.disliked){
        item.dislikes--;
        item.disliked = false;
      }
    }
  }
  dislikeIt(item) {
    if (!item.disliked){
       item.dislikes ++;
       item.disliked = true;
      if (item.liked){
        item.likes--;
        item.liked = false;
      }
    }
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(TailorDetailPage, {
      item: item
    });
  }
}
