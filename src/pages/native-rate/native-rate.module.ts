import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeRatePage } from './native-rate';

@NgModule({
  declarations: [
    NativeRatePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeRatePage),
  ],
})
export class NativeRatePageModule {}
