import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl
} from '@angular/forms';


@Component({
  templateUrl: 'size.html'
})
export class SizePage {
  langs;
  sizeForm;

  constructor() {
    this.sizeForm = new FormGroup({
      "sizes": new FormControl({value: 'myprofile', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.sizeForm.value);
    event.preventDefault();
  }
}