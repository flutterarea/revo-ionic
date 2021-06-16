import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';

@IonicPage()
@Component({
  selector: 'page-fun-popups',
  templateUrl: 'fun-popups.html',
})
export class FunPopupsPage {

  @ViewChild('popupM') popupMiddleAnimate;
  @ViewChild('popupA') popupAutoAnimate;
  @ViewChild('popupO') popupOverlayAnimate;
  private animator: AnimationBuilder;

  popupMiddle:any = false;
  popupAuto:any = false;
  popupOverlay:any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, animationService: AnimationService) {
    this.animator = animationService.builder();
  }

  ionViewDidLoad() {
    setTimeout(() => {
         this.openAuto()
       }, 1000);
  }

  openStandard() {
    const alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Do you really want to buy this awesome tool? It looks promising and it is incredible cheap.',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
    alert.present();
  }

  openMiddle() {
    this.popupMiddle = true;
    setTimeout(() => {
         this.animator.setType('fadeInDown').show(this.popupMiddleAnimate.nativeElement);
       }, 1);
  }

  openOverlay() {
    this.popupOverlay = true;
    setTimeout(() => {
         this.animator.setType('bounceIn').show(this.popupOverlayAnimate.nativeElement);
       }, 1);
  }

  openAuto() {
    this.popupAuto = true;
    setTimeout(() => {
      this.animator.setType('zoomInDown').show(this.popupAutoAnimate.nativeElement);
    }, 1);
  }

}
