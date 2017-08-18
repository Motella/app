import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "علیرضا وفی",
    "profilePic": "assets/img/tailors/Alireza.jpg",
    "about": "طراحی و دوخت انواع لباس های عروس و شب",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "علیرضا وفی",
        "profilePic": "assets/img/tailors/Alireza.jpg",
        "about": "طراحی و دوخت انواع لباس های عروس و شب",
        "likes": 5,
        "dislikes": 1,
        "comments": [
          "خیاط خوبیه ، یه لباس دوخته عالیه",
          "پارچم رو خراب کرده"
        ]
      },
      {
        "name": "شراره لطفی",
        "profilePic": "assets/img/tailors/Sharareh.jpg",
        "about": "طراحی و دوخت لباس های بچه گانه",
        "likes": 5,
        "dislikes": 1,
      },
      {
        "name": "آرش دانش",
        "profilePic": "assets/img/tailors/Arash.jpg",
        "about": "طراحی و دوخت لباس مردانه رسمی و اسپورت",
        "likes": 15,
        "dislikes": 6,
      },
      {
        "name": "فاطمه موقری",
        "profilePic": "assets/img/tailors/Fatemeh.jpg",
        "about": "Eva is an Eagle.",
        "likes": 15,
        "dislikes": 3,
      },
      {
        "name": "زهرا یوسفی",
        "profilePic": "assets/img/tailors/Zahra.jpg",
        "about": "طراحی و دوخت کت و شلوار",
        "likes": 50,
        "dislikes": 1,
      },
      {
        "name": "بیتا نفر داودی",
        "profilePic": "assets/img/tailors/Bita.jpg",
        "about": "طراحی و دوخت لباس عروس",
        "likes": 6,
        "dislikes": 5,
      },
      {
        "name": "بابک رحیمی",
        "profilePic": "assets/img/tailors/Babak.jpg",
        "about": "طراحی و دوخت لباس مجلسی",
        "likes": 24,
        "dislikes": 3,
      },
      {
        "name": "سبحان آیین",
        "profilePic": "assets/img/tailors/Sobhan.jpg",
        "about": "طراحی و دوخت لباس مجلسی",
        "likes": 24,
        "dislikes": 3,
      },
      {
        "name":"پریناز علیزاده",
        "profilePic": "assets/img/tailors/Parinaz.jpg",
        "about": "طراحی و دوخت لباس مجلسی",
        "likes": 24,
        "dislikes": 3,
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

  static orders: any[] = [];
  addOrder(order){
     Items.orders.push(order);
  }

  getOrders(){
    return Items.orders;
  }

  deleteOrder(order) {
    Items.orders.splice(Items.orders.indexOf(order), 1);
  }


  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
