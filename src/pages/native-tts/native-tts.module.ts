import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeTtsPage } from './native-tts';

@NgModule({
  declarations: [
    NativeTtsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeTtsPage),
  ],
})
export class NativeTtsPageModule {}
