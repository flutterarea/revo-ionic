import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

@IonicPage()
@Component({
  selector: 'page-native-fullscreen',
  templateUrl: 'native-fullscreen.html',
})
export class NativeFullscreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private androidFullScreen: AndroidFullScreen) {
  }

  ionViewDidLoad() {

  }

  fullscreen() {
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
  }

  normalscreen() {
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.showSystemUI())
      .catch((error: any) => console.log(error));
  }

}
