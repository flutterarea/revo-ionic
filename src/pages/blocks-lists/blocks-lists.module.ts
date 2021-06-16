import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlocksListsPage } from './blocks-lists';

@NgModule({
  declarations: [
    BlocksListsPage,
  ],
  imports: [
    IonicPageModule.forChild(BlocksListsPage),
  ],
})
export class BlocksListsPageModule {}
