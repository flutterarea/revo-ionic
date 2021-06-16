import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopSingleProductPage } from './shop-single-product';

@NgModule({
  declarations: [
    ShopSingleProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopSingleProductPage),
  ],
})
export class ShopSingleProductPageModule {}
