import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fun-loading',
  templateUrl: 'fun-loading.html',
})
export class FunLoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

  }

  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'I am loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  presentLoadingCustom() {
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/img-icons/spinner.png">`,
      duration: 3000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  presentLoadingText() {
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

}
