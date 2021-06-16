import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunGesturesPage } from './fun-gestures';

@NgModule({
  declarations: [
    FunGesturesPage,
  ],
  imports: [
    IonicPageModule.forChild(FunGesturesPage),
  ],
})
export class FunGesturesPageModule {}
