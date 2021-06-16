import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunSearchPage } from './fun-search';

@NgModule({
  declarations: [
    FunSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FunSearchPage),
  ],
})
export class FunSearchPageModule {}
