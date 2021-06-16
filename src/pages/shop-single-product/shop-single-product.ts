import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop-single-product',
  templateUrl: 'shop-single-product.html',
})
export class ShopSingleProductPage {

  product:any;
  featImg:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('product');
    this.featImg = this.product.featured_src;
    console.log(this.product)
  }

  ionViewDidLoad() {

  }

}
