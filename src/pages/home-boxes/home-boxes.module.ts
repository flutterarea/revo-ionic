import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeBoxesPage } from './home-boxes';

@NgModule({
  declarations: [
    HomeBoxesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeBoxesPage),
  ],
})
export class HomeBoxesPageModule {}
