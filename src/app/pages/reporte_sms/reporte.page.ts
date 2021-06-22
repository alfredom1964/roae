import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { merge, Observable, Subscription, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { mergeMap } from 'rxjs/operators';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  ionicForm: FormGroup;
  data = '';
  reporteId: string;
  preguntas$: Observable<Array<any>>;
  reportes$: Observable<Array<any>>;
  currDate = '';
  currTime = '';
  username$: Promise<any>;
  values = [];
  subscription: Subscription;


  // Location coordinates
  lat: number;
  lng: number;
  accuracy: number;
  locale: string;

  // Telefono SMS
 // telefono: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    // private toastController: ToastController,
    private geolocation: Geolocation,
    public formBuilder: FormBuilder,
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    private sms: SMS
  ) {}

  ngOnInit() {
    this.reporteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.preguntas$ = this.authService.getReportDetail(this.reporteId);
    this.reportes$ = this.authService.getReports();
    this.currDate = new Date().toLocaleString();
 //   this.currTime = new Date().toLocaleTimeString();
    this.username$ = this.authService.getUsername();
    this.getGeolocation();
    this.startClock();
    this.subscription = this.preguntas$
      .pipe(
        mergeMap(async (preguntas) => {
          const usuario = await this.username$;
          return {
            preguntas,
            usuario,
            
          };
        })
      )
      .subscribe(({ preguntas, usuario }) => {
        const preguntasObject = {};
        preguntas.forEach((pregunta, index) => {
          // Si es 1 le ponemos la hora por valor de defecto
          if (pregunta.tipo_pregunta_id === '1') {
            preguntasObject[pregunta.id] = [this.currDate]; 
          } 
          else if (pregunta.tipo_pregunta_id === '3') {
            preguntasObject[pregunta.id] = ['', [Validators.required]];
          } else {
            preguntasObject[pregunta.id] = [false];
          }
          // Le ponemos de una vez a la de id uno el valor del usuario, igual no lo puede cambiar
          if (pregunta.id === '1') {
            preguntasObject[pregunta.id] = [usuario];
          }
          
        });
        this.ionicForm = this.formBuilder.group(preguntasObject); console.log(preguntasObject)
      });
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startClock() {
    timer(0, 1000).subscribe(() => {
      this.currDate = new Date().toLocaleString();
    });
  }


  submitForm() {console.log(this.ionicForm.value);
    this.authService
      .postReporte({
        form: this.ionicForm.value,
        coords: { lat: this.lat, lng: this.lng },
        reporteId: this.reporteId,
        
      })
      .subscribe();
      this.sms.send('+584126230595', "hola");
  }

  

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  //Get current coordinates of device
  getGeolocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.accuracy = resp.coords.accuracy;

        this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
      })
      .catch((error) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        console.log(result[0]);
        this.sms.send('+584126230595', 'Hola mundo!');
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }
}


