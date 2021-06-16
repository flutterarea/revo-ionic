import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsTabsPage } from './elements-tabs';

@NgModule({
  declarations: [
    ElementsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementsTabsPage),
  ],
})
export class ElementsTabsPageModule {}
