import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {

  }

  gotoHome() {
    this.menuCtrl.enable(true);
    this.navCtrl.setRoot(HomePage)
  }

  gotoLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

}
