import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.item.price = Math.floor((Math.random() * 100) + 1) * 1000;
  }

  placeOrder(){
    this.navCtrl.push(ConfirmPage, {
      item: this.item
    });
  }
}
