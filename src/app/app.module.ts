import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { httpInterceptorProviders } from './interceptors/index'
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { SMS } from '@ionic-native/sms/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { Network } from "@ionic-native/network/ngx";



export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost']
  }
}
 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,
  IonicStorageModule.forRoot(),
  JwtModule.forRoot({
    jwtOptionsProvider: {
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactory,
      deps: [Storage],
    }
  })],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    UniqueDeviceID,SMS,
    AndroidPermissions,
    Uid,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders,
    Network,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}