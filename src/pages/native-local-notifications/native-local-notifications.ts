import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-native-local-notifications',
  templateUrl: 'native-local-notifications.html',
})
export class NativeLocalNotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
  }

  ionViewDidLoad() {

  }

  notif(message) {
    this.localNotifications.schedule({
      id: 1,
      text: message,
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      //data: { secret: key }
    });
  }

}
