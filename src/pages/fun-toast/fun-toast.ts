import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fun-toast',
  templateUrl: 'fun-toast.html',
})
export class FunToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

  }

  show(message, position, duration, close) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      showCloseButton: close,
    });
    toast.present();
  }

}
