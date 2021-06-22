(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reporte-reporte-module"],{

/***/ "1R/f":
/*!*************************************************!*\
  !*** ./src/app/pages/reporte/reporte.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  width: 100%;\n}\n\nion-input {\n  text-align: right;\n}\n\nion-text {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InJlcG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taW5wdXQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "UkCo":
/*!*************************************************!*\
  !*** ./src/app/pages/reporte/reporte.module.ts ***!
  \*************************************************/
/*! exports provided: ReportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePageModule", function() { return ReportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-routing.module */ "dJCH");
/* harmony import */ var _reporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte.page */ "iqu/");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "fwsW");









let ReportePageModule = class ReportePageModule {
};
ReportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportePageRoutingModule"],
        ],
        declarations: [_reporte_page__WEBPACK_IMPORTED_MODULE_6__["ReportePage"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [_ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]],
    })
], ReportePageModule);



/***/ }),

/***/ "dJCH":
/*!*********************************************************!*\
  !*** ./src/app/pages/reporte/reporte-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePageRoutingModule", function() { return ReportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte.page */ "iqu/");




const routes = [
    {
        path: '',
        component: _reporte_page__WEBPACK_IMPORTED_MODULE_3__["ReportePage"]
    }
];
let ReportePageRoutingModule = class ReportePageRoutingModule {
};
ReportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportePageRoutingModule);



/***/ }),

/***/ "iqu/":
/*!***********************************************!*\
  !*** ./src/app/pages/reporte/reporte.page.ts ***!
  \***********************************************/
/*! exports provided: ReportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePage", function() { return ReportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reporte.page.html */ "ithf");
/* harmony import */ var _reporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte.page.scss */ "1R/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "lGQG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "gTw3");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "I7pt");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/network.service */ "dwY0");














let ReportePage = class ReportePage {
    // Telefono SMS
    // telefono: number;
    constructor(activatedRoute, authService, 
    // private toastController: ToastController,
    geolocation, formBuilder, nativeGeocoder, router, sms, network) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.geolocation = geolocation;
        this.formBuilder = formBuilder;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.sms = sms;
        this.network = network;
        this.data = '';
        this.currDate = '';
        this.currTime = '';
        this.values = [];
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5,
        };
    }
    ngOnInit() {
        this.reporteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.preguntas$ = this.authService.getReportDetail(this.reporteId);
        this.reportes$ = this.authService.getReports();
        this.currDate = new Date().toLocaleString();
        this.username$ = this.authService.getUsername();
        this.getGeolocation();
        this.startClock();
        this.subscription = this.preguntas$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mergeMap"])((preguntas) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const usuario = yield this.username$;
            return {
                preguntas,
                usuario,
            };
        })))
            .subscribe(({ preguntas, usuario }) => {
            const preguntasObject = {};
            preguntas.forEach((pregunta, index) => {
                // Si es 1 le ponemos la hora por valor de defecto
                if (pregunta.tipo_pregunta_id === '1') {
                    preguntasObject[pregunta.id] = [this.currDate];
                }
                else if (pregunta.tipo_pregunta_id === '3') {
                    preguntasObject[pregunta.id] = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]];
                }
                else {
                    preguntasObject[pregunta.id] = [false];
                }
                // Le ponemos de una vez a la de id uno el valor del usuario, igual no lo puede cambiar
                if (pregunta.id === '1') {
                    preguntasObject[pregunta.id] = [usuario];
                }
            });
            this.ionicForm = this.formBuilder.group(preguntasObject);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    startClock() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 1000).subscribe(() => {
            this.currDate = new Date().toLocaleString();
        });
    }
    submitForm() {
        console.log(this.ionicForm.value);
        this.authService
            .postReporte({
            form: this.ionicForm.value,
            coords: { lat: this.lat, lng: this.lng },
            reporteId: this.reporteId,
        })
            .subscribe();
    }
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
            .then((result) => {
            console.log(result[0]);
        })
            .catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
        });
    }
};
ReportePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_11__["SMS"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"] }
];
ReportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reporte',
        template: _raw_loader_reporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportePage);



/***/ }),

/***/ "ithf":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporte/reporte.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"inside\"></ion-back-button>\n    </ion-button>\n    <div *ngFor=\"let reporte of reportes$ | async;  let i = index \">\n      <ion-title *ngIf=\"i+1 == reporteId\">\n        Reporte de las {{ reporte.hora[0] }}{{reporte.hora[1]}}:{{ reporte.hora[2] }}{{reporte.hora[3]}}\n      </ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"ionicForm\">\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"\">\n        <ion-text>\n          Latitud:\n        </ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-input type=\"text\" name=\"lat\" value=\"{{lat}}\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n\n     \n    <ion-row>\n      <ion-col size=\"4\" class=\"\">\n        <ion-text>\n          Longitud:\n        </ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-input type=\"text\" name=\"lng\" value=\"{{lng}}\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n    \n    <ion-list>\n      <ion-item-sliding *ngFor=\"let pregunta of preguntas$ | async;  let i = index \">\n\n        <ion-item *ngIf=\"i == '0'\">\n          <ion-label class=\"ion-text-wrap\">{{pregunta.texto_pregunta}}</ion-label>\n          <ion-input disabled slot=\"end\" formControlName=\"{{ pregunta.id }}\" disabled value=\"{{ username$ | async }}\">\n          </ion-input>\n        </ion-item>\n\n        <div *ngIf=\"i != '0'\">\n\n          <ion-item *ngIf=\"pregunta?.tipo_pregunta_id == '1'\">\n            <ion-label class=\"ion-text-wrap\">Fecha/Hora:</ion-label>\n            \n            <ion-input name=\"hora\" [(value)]=\"currDate\"  formControlName=\"{{ pregunta.id }}\" slot=\"end\" disabled>\n           \n            </ion-input>\n          </ion-item>\n \n            \n          <ion-item *ngIf=\"pregunta?.tipo_pregunta_id == '2'\">\n            <ion-label class=\"ion-text-wrap\">{{pregunta.texto_pregunta}}</ion-label>\n            <ion-checkbox slot=\"end\" formControlName=\"{{ pregunta.id }}\"></ion-checkbox>\n          </ion-item>\n\n          <ion-item *ngIf=\"pregunta?.tipo_pregunta_id == '3'\">\n            <ion-label class=\"ion-text-wrap\">{{pregunta.texto_pregunta}}</ion-label>\n            <ion-input type=\"number\" placeholder=\"Escriba numero\" slot=\"end\" formControlName=\"{{ pregunta.id }}\"></ion-input>\n\n          </ion-item>\n\n\n          <ion-item *ngIf=\"pregunta?.tipo_pregunta_id == '4'\">\n            <ion-label class=\"ion-text-wrap\">{{pregunta.texto_pregunta}}</ion-label>\n            <ion-input type=\"text\" placeholder=\"Escriba su respuesta\" slot=\"end\" formControlName=\"{{ pregunta.id }}\">\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"block\" type=\"submit\" disabled=\"{{ ionicForm.invalid }}\">Enviar</ion-button>\n   </form>  \n  \n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-reporte-reporte-module-es2015.js.map