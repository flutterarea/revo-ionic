import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeRestaurantPage } from './home-restaurant';

@NgModule({
  declarations: [
    HomeRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeRestaurantPage),
  ],
})
export class HomeRestaurantPageModule {}
