import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ElementsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elements-tabs',
  templateUrl: 'elements-tabs.html',
})
export class ElementsTabsPage {

  tabsone:any = 'lorem'
  tabstwo:any = 'ipsum'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementsTabsPage');
  }

}
