import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTravelPage } from './home-travel';

@NgModule({
  declarations: [
    HomeTravelPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTravelPage),
  ],
})
export class HomeTravelPageModule {}
