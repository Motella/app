import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@Component({
  selector: 'tailor-item-detail',
  templateUrl: 'tailor-detail.html'
})
export class TailorDetailPage {
  item: any;
  comment:boolean;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.comment=false;
  }
showComment(){
  this.comment = !this.comment;
}
}
