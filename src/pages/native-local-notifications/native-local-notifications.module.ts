import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeLocalNotificationsPage } from './native-local-notifications';

@NgModule({
  declarations: [
    NativeLocalNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeLocalNotificationsPage),
  ],
})
export class NativeLocalNotificationsPageModule {}
