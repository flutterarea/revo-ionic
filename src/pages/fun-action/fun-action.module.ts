import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunActionPage } from './fun-action';

@NgModule({
  declarations: [
    FunActionPage,
  ],
  imports: [
    IonicPageModule.forChild(FunActionPage),
  ],
})
export class FunActionPageModule {}
