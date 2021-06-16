import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class LockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {

  }

  gotoHome() {
    this.menuCtrl.enable(true);
    this.navCtrl.setRoot(HomePage)
  }

}
