import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopSingleProductPage } from '../shop-single-product/shop-single-product';
import { WcProvider } from '../../providers/wc/wc';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  products:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private wc: WcProvider,  private zone: NgZone, private utils: UtilsProvider) {
    this.utils.loadShow('Loading products');
  }

  ionViewDidLoad() {
    this.wc.get('products').then(res =>  {
      this.zone.run(() => {
          this.products = res.products;
          this.utils.loadHide();
        });
      });
  }

  openSingleProduct(product) {
    this.navCtrl.push(ShopSingleProductPage, {
      product: product
    })
  }

}
