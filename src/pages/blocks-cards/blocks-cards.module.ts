import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlocksCardsPage } from './blocks-cards';

@NgModule({
  declarations: [
    BlocksCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(BlocksCardsPage),
  ],
})
export class BlocksCardsPageModule {}
