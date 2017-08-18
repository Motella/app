import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.item.price = Math.floor((Math.random() * 100) + 1) * 1000;
  }

  nextStep(selectedItem) {
    this.navCtrl.push(SettingsPage, {
      item: this.item
    });
  }

}
