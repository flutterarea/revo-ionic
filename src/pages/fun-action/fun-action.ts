import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fun-action',
  templateUrl: 'fun-action.html',
})
export class FunActionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Awesome Action Sheet',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            alert('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            alert('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
