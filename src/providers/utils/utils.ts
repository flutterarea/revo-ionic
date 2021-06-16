import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  loader:any;

  constructor(public loadingCtrl: LoadingController) {

  }

  loadShow(message) {
    this.loader = this.loadingCtrl.create({
      content: message,
    });
    this.loader.present();
  }

  loadHide() {
    if(this.loader) {
        this.loader.dismiss();
        this.loader = null;
    }
  }

}
