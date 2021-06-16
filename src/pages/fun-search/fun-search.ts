import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fun-search',
  templateUrl: 'fun-search.html',
})
export class FunSearchPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {

  }

  initializeItems() {
    this.items = [
      'Acer',
      'Alcatel',
      'Benq',
      'Blackberry',
      'Dell',
      'Google',
      'HP',
      'HTC',
      'Lenovo',
      'Motorola',
      'Nec',
      'Nokia',
      'Panasonic',
      'Philips',
      'Samsung',
      'Siemens',
      'Sony',
      'Toshiba',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
