import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-tailors',
  templateUrl: 'tailorSelection.html'
})
export class TailorSelectionPage {
  currentItems: Item[];
  item: any;
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, navParams: NavParams) {
    this.item = navParams.get('item');
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  nextStep(selectedItem) {
    this.item.tailor = selectedItem;
    this.navCtrl.push(PaymentPage, {
      item: this.item
    });
  }
}
