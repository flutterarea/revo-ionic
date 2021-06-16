import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsGridPage } from './elements-grid';

@NgModule({
  declarations: [
    ElementsGridPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementsGridPage),
  ],
})
export class ElementsGridPageModule {}
