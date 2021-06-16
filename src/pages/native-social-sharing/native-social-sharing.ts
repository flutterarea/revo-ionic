import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-native-social-sharing',
  templateUrl: 'native-social-sharing.html',
})
export class NativeSocialSharingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {

  }

  share() {
    this.socialSharing.share('This is a great article to share.', 'My shared one', null, null) // share(message, subject, file, url)
    .then(() => {

    }).catch(() => {

    });
  }



}
