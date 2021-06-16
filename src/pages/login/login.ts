import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {

  }

  gotoHome() {
    this.menuCtrl.enable(true);
    this.navCtrl.setRoot(HomePage)
  }

  gotoRegister() {
    this.navCtrl.setRoot(RegisterPage)
  }

}
