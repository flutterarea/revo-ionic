import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeFullscreenPage } from './native-fullscreen';

@NgModule({
  declarations: [
    NativeFullscreenPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeFullscreenPage),
  ],
})
export class NativeFullscreenPageModule {}
