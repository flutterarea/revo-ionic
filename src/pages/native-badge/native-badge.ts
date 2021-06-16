import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

@IonicPage()
@Component({
  selector: 'page-native-badge',
  templateUrl: 'native-badge.html',
})
export class NativeBadgePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private badge: Badge) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativeBadgePage');
  }

  set(x) {
    if(x==9) {
      this.badge.set(9);
    }
    if(x==3) {
      this.badge.set(3);
    }
    if(x==0) {
      this.badge.clear();
    }
    if(x==1) {
      this.badge.increase(1);
    }
  }

}
