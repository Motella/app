import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fabrics',
  templateUrl: 'fabrics.html'
})
export class FabricsPage {
  cardItems: any[];
  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        image: '',
        content: 'پارچه با مشتری',
        like:0,
        dislike:0,
        comment:0
      },
      {
        image: 'assets/img/fabrics/Viscose-Jersey-Fabric.jpg',
        content: 'ویسکوز',
        like:12,
        dislike:2,
        comment:2
      },
      {
        image: 'assets/img/fabrics/soft-purple-fabric.jpg',
        content: 'نخ پنبه',
        like:12,
        dislike:2,
        comment:2
      },
      {
        image: 'assets/img/fabrics/linen_viscose_jacquard.jpg',
        content: 'کتان',
        like:25,
        dislike:2,
        comment:1
      },
      {
        image: 'assets/img/fabrics/red-vinyl-fabric_924x699.jpg',
        content: 'ابریشم',
        like:25,
        dislike:2,
        comment:1
      },
      {
        image: 'assets/img/fabrics/red-silk-fabric.jpg',
        content: 'ساتن',
        like:7,
        dislike:2,
        comment:4
      },
      {
        image: 'assets/img/fabrics/Polyester-Chiffon.jpg',
        content: 'پلی استر شیفون',
        like:7,
        dislike:2,
        comment:4
      }];
  }
  nextStep(item) {
    // this.navCtrl.push(ItemDetailPage, {
    //   item: item
    // });
  }
}
