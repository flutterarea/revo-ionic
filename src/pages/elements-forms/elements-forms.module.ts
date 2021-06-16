import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsFormsPage } from './elements-forms';

@NgModule({
  declarations: [
    ElementsFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementsFormsPage),
  ],
})
export class ElementsFormsPageModule {}
