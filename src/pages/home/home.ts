import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {title: 'Apple'},
    {title: 'Cherry'},
    {title: 'Banana'},
    {title: 'Other'},
    {title: 'Tomato'},
    {title: 'Grape'},
    {title: 'Pomegranate'},
    {title: 'Carrot'},
    {title: 'Apple'},
    {title: 'Cherry'},
    {title: 'Banana'},
    {title: 'Other'},
    {title: 'Tomato'},
    {title: 'Grape'},
    {title: 'Pomegranate'},
    {title: 'Carrot'},
  ]

  constructor(public navCtrl: NavController) {

  }

  itemClicked(event, item) {
    console.log(item.title);
  }

}
