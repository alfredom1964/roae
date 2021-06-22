import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  

  ngOnInit() {
    getGeolocation();
  }

}


export class Localizacion {
  lat:number
  lon:number
  total:string

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {
    this.getGeolocation()
  }

  getGeolocation(){
 //   this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
 //     this.lat = geoposition.coords.latitude;
 //     this.lon = geoposition.coords.longitude;
 //   });
  }
}

function getGeolocation() {
  throw new Error('Function not implemented.');
}
