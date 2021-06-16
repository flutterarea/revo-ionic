import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeCameraPreviewPage } from './native-camera-preview';

@NgModule({
  declarations: [
    NativeCameraPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeCameraPreviewPage),
  ],
})
export class NativeCameraPreviewPageModule {}
