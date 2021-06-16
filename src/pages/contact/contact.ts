import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  @ViewChild('mapSmall') mapElement: ElementRef;
  map: any;
  latitude:any = 42.3074027;
  longitude:any = -83.7315648;
  message:any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let latlng = new google.maps.LatLng(this.latitude, this.longitude);

    setTimeout(() => {
      this.loadMap(latlng);
      this.addMarker(this.latitude, this.longitude)
    }, 100);

  }

  loadMap(coords) {
    let mapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
      scrollwheel: false,
      navigationControl: false,
      draggable: true,
      // style https://snazzymaps.com
      styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker(lat, lng) {
      let icon = {
        url: 'assets/img-icons/marker-filled.png',
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
      let MlatLng = new google.maps.LatLng(lat, lng)
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: MlatLng,
        icon: icon,
      //  label: name
      });
      marker.setMap(this.map);
  }

  openMessage() {
    if(this.message == false) {
      this.message = true;
    } else {
      this.message = false;
    }
  }

}
