import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';

@IonicPage()
@Component({
  selector: 'page-native-camera-preview',
  templateUrl: 'native-camera-preview.html',
})
export class NativeCameraPreviewPage {

  cam:any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraPreview: CameraPreview) {
  }

  ionViewDidLoad() {

  }

  start() {
    this.cam = true;
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height, 
      camera: 'rear',
      tapPhoto: false,
      previewDrag: false,
      toBack: true,
      alpha: 1
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
  }

  effect(eff) {
    this.cameraPreview.setColorEffect(eff);

    // name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
  }

  switch() {
    this.cameraPreview.switchCamera();
  }

  stop() {
    this.cam = false;
    this.cameraPreview.stopCamera();
  }

}
