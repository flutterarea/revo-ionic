import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeBadgePage } from './native-badge';

@NgModule({
  declarations: [
    NativeBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeBadgePage),
  ],
})
export class NativeBadgePageModule {}
