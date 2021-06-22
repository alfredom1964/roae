import { Injectable } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  UniqueDeviceID: string;

  constructor( private uniqueDeviceID: UniqueDeviceID,
  private uid: Uid,
  private androidPermissions: AndroidPermissions
) {
}
getUniqueDeviceID() {
  this.uniqueDeviceID.get()
    .then((uuid: any) => {
      console.log(uuid);
      this.UniqueDeviceID = uuid;
    })
    .catch((error: any) => {
      console.log(error);
      this.UniqueDeviceID = "Error! ${error}";
    });
}
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {

  }

}




