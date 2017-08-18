import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  cardItems: any[];
  item: any;
  constructor(public navCtrl: NavController, navParams: NavParams) {

  }
}

