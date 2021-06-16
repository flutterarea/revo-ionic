import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppRate } from '@ionic-native/app-rate';

@IonicPage()
@Component({
  selector: 'page-native-rate',
  templateUrl: 'native-rate.html',
})
export class NativeRatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private appRate: AppRate) {
    this.appRate.preferences.storeAppURL = {
      android: 'market://details?id=com.pssthemes.classifieds',
    };
  }

  ionViewDidLoad() {

  }

  rate() {
    this.appRate.promptForRating(true);
  }

}
