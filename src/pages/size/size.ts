import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  FormGroup, FormControl} from '@angular/forms';
import { TailorSelectionPage } from '../tailorSelection/tailorSelection';

@Component({
  selector: 'page-size',
  templateUrl: 'size.html'
})

export class SizePage {
  langs;
  sizeForm;
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.sizeForm = new FormGroup({
      "sizes": new FormControl({value: 'myprofile', disabled: false})
    });
    this.item = navParams.get('item');
  }

  doSubmit(event) {
    console.log('Submitting form', this.sizeForm.value);
    event.preventDefault();
  }
  nextStep() {
    //this.item.size = selectedItem;
    this.navCtrl.push(TailorSelectionPage, {
      item: this.item
    });
  }
}
