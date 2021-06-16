import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsChipsPage } from './elements-chips';

@NgModule({
  declarations: [
    ElementsChipsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementsChipsPage),
  ],
})
export class ElementsChipsPageModule {}
