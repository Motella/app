import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "شهرزاد دوستی ",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "طراحی و دوخت انواع لباس های عروس و شب",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "شهرزاد دوستی ",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "طراحی و دوخت انواع لباس های عروس و شب"
      },
      {
        "name": "هنگامه سلیمی",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "طراحی و دوخت لباس های بچه گانه"
      },
      {
        "name": "یاس فرابی",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "طراحی و دوخت لباس مردانه رسمی و اسپورت"
      },
      {
        "name": "گلنار توانا",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "کلانتر هرمزی",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "طراحی و دوخت کت و شلوار"
      },
      {
        "name": "گلشن میناوند",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "طراحی و دوخت لباس عروس"
      },
      {
        "name": "گل رز",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "طراحی و دوخت لباس مجلسی"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
