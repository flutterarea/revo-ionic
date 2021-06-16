import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeDarkPage } from './home-dark';

@NgModule({
  declarations: [
    HomeDarkPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeDarkPage),
  ],
})
export class HomeDarkPageModule {}
