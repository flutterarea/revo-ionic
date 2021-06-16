import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content)
  content: Content;
  scroll:any = 0;

  constructor(public navCtrl: NavController, public zone: NgZone) {

   }

  ionViewDidLoad() {
    this.content.ionScroll.subscribe(($event) => {
      this.zone.run(() => {
        this.scroll = $event.scrollTop;
      })
    });
  }


}
