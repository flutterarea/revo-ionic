import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@IonicPage()
@Component({
  selector: 'page-native-tts',
  templateUrl: 'native-tts.html',
})
export class NativeTtsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {

  }

  speak(message) {
    this.tts.speak(message)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
