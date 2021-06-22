(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



let LoginGuardService = class LoginGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.getToken();
    }
};
LoginGuardService.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuardService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alfredo\roae\src\main.ts */"zUnb");


/***/ }),

/***/ "5dVO":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoaderService = class LoaderService {
    constructor(loaderCtrl) {
        this.loaderCtrl = loaderCtrl;
        this.loader = null;
    }
    show(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loader !== null) {
                this.loader.dismiss();
                this.loader = null;
            }
            this.loader = yield this.loaderCtrl.create({
                spinner: "crescent",
                message: message ? message : "Cargando...",
            });
            return this.loader.present();
        });
    }
    hide() {
        if (this.loader !== null) {
            this.loader.dismiss();
            this.loader = null;
        }
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LoaderService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    //url: 'https://thingproxy.freeboard.io/fetch/https://api.redobservacionae.org',
    url: 'https://api.redobservacionae.org',
    constants: {
        TOKEN_KEY: '',
        USER_KEY: 'USER',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PC4I":
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.interceptor */ "RDNO");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
];


/***/ }),

/***/ "RDNO":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







const { TOKEN_KEY } = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].constants;
/** Pass untouched request through to the next request handler. */
let AuthInterceptor = class AuthInterceptor {
    constructor(storage, alertController) {
        this.storage = storage;
        this.alertController = alertController;
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: "Error",
            buttons: ["OK"],
        });
        alert.then((alert) => alert.present());
    }
    intercept(req, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.storage.get(TOKEN_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((token) => {
            // Si no hay token pasamos la request directamente
            if (!token) {
                return next.handle(req);
            }
            // Si lo tenemos, clonamos la request, enchufamos el token en los headers y la pasamos al handler
            const authReq = req.clone({
                headers: req.headers.set("api_token", token),
            });
            return next.handle(authReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                this.showAlert("Error con conexión intente mas tarde.");
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/network.service */ "dwY0");









let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, router, network) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.network = network;
        this.initializeApp();
        this.network.listenNetworkChanges();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    openTutorial() {
        // this.menu.enable(false);
        this.storage.set("ion_did_tutorial", true);
        this.router.navigateByUrl("/tutorial");
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



let AuthGuardService = class AuthGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.checkToken();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtOptionsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _interceptors_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/index */ "PC4I");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "gTw3");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "I7pt");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "/+Rg");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "JN8Z");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");






















function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['localhost']
    };
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]],
                }
            })],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__["NativeGeocoder"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_19__["UniqueDeviceID"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"],
            _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _interceptors_index__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "dwY0":
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let NetworkService = class NetworkService {
    constructor(network) {
        this.network = network;
        this.networkConnection$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
    }
    listenNetworkChanges() {
        console.log("Will listen to network changes!");
        this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.networkConnection$.next(false);
        });
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            setTimeout(() => {
                // console.log("Network type", this.network.type);
                // if (this.network.type === "wifi") {
                this.networkConnection$.next(true);
                // }
            }, 3000);
        });
    }
    ngOnDestroy() {
        this.disconnectSubscription.unsubscribe();
        this.connectSubscription.unsubscribe();
    }
};
NetworkService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] }
];
NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], NetworkService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "I7pt");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./network.service */ "dwY0");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader.service */ "5dVO");















// Declaro esta constante dentro de environment para que sea accesible desde otros modulos
const { TOKEN_KEY, USER_KEY } = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].constants;
let AuthService = class AuthService {
    constructor(http, helper, storage, plt, alertController, router, loadingController, toastController, sms, networkService, loaderService) {
        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.sms = sms;
        this.networkService = networkService;
        this.loaderService = loaderService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.usuario = "";
        this.clave = "";
        this.reportes = [];
        this.preguntas = [];
        this.listos = [];
        this.fecha = [];
        this.hora = [];
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.plt.ready();
            yield this.storage.create();
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            // // Si estamos en una ruta que no se login, mostramos loader, luego de resolver si el token es valido o no, el metodo checkToken quita el loader
            // if (this.router.url !== "/login") {
            //   await this.loading.present();
            //   setTimeout(() => {
            //     this.loading.dismiss();
            //   }, 5000);
            // }
        });
    }
    // Este metodo se llama desde el guard de login, si no tenemos el token quiere decir que podemos entrar a la pagina del login
    getToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.storage.get(TOKEN_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((token) => {
            if (!token) {
                return true;
            }
            this.router.navigate(["inside"]);
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => {
            console.log("Tuvimos error de token", err);
            throw new Error(err);
        }));
    }
    checkToken() {
        // Muestra la splashscreen mientras hacemos la peticion
        return this.http.get(`${this.url}/view`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            if (response.res) {
                this.loading.dismiss();
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            this.loading.dismiss();
            if (e.status === 401) {
                this.storage.remove(TOKEN_KEY);
                this.router.navigate(["login"]);
            }
            throw new Error(e);
        }));
    }
    checkReports() {
        // Muestra la splashscreen mientras hacemos la peticion
        return this.http.get(`${this.url}/reports`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            if (response.res) {
                // Si es valida ocultamos la splashscreen
                this.loading.dismiss();
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            console.log("Error en checkReports");
            this.loading.dismiss();
            if (e.status === 401) {
                this.storage.remove(TOKEN_KEY);
                this.router.navigate(["login"]);
            }
            throw new Error(e);
        }));
    }
    register(credentials) {
        return this.http.post(`${this.url}/login`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    getUsername() {
        return this.storage.get(USER_KEY);
    }
    login(credentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.show();
            return this.http
                .post(`${this.url}/login`, credentials)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.res === false) {
                    this.loaderService.hide();
                    this.showAlert("Credenciales inválidas o fallo en la conexión");
                    return;
                }
                // Recuerda que tambien puedes hacer result.token y escribes menos
                this.storage.set(USER_KEY, credentials.usuario);
                const TOKEN_NEW = this.storage.set(TOKEN_KEY, result["token"]);
                let toast = this.toastController.create({
                    message: "Usuario autorizado!!",
                    duration: 6000,
                });
                toast.then((toast) => toast.present());
                this.router.navigate(["tutorial"]);
                // Dejo esto comentado porque el token que devuelven no es un JWT.
                // this.usuario = this.helper.decodeToken(result['token']);
                this.loaderService.hide();
                this.authenticationState.next(true);
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loaderService.hide();
                this.showAlert("Credenciales inválidas o fallo en la conexión");
                throw new Error(JSON.stringify(e));
            })))
                .subscribe();
        });
    }
    logout() {
        this.loading.present();
        return this.http.post(`${this.url}/logout`, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((res) => {
            console.log(res);
            this.storage
                .remove(TOKEN_KEY)
                .then(() => {
                this.router.navigate(["login"]);
                this.authenticationState.next(false);
                this.loading.dismiss();
                return this.storage.remove(USER_KEY);
            })
                .then(() => {
                console.log("Logout done!");
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            this.loading.dismiss();
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    getSpecialData() {
        // Este vendria siendo el metodo que necesitas aqui para verificar tu token
        // No tienes que meter el header por cada request para autenticarla, el AuthInterceptor se encarga de poner el header si lo encuentra para cada request
        return this.checkToken();
    }
    getReports() {
        this.loading.present();
        return this.http.get(`${this.url}/reports`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            let toast = this.toastController.create({
                message: "Reportes cargados",
                duration: 3000,
            });
            this.loading.dismiss();
            toast.then((toast) => toast.present());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            return response.reportes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            console.log("ERROR EN GET REPORTS");
            this.loading.dismiss();
            this.showAlert("Error buscando reportes");
            throw new Error(e);
        }));
    }
    getReportsListos(id) {
        this.loading.present();
        return this.http.get(`${this.url}/reportado?id=` + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            let toast = this.toastController.create({
                message: "Reportes cargados",
                duration: 3000,
            });
            this.loading.dismiss();
            toast.then((toast) => toast.present());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            return response.listos;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            console.log("ERROR EN GET REPORTS LISTOS");
            this.loading.dismiss();
            this.showAlert("Error buscando reportes");
            throw new Error(e);
        }));
    }
    getReportDetail(id) {
        return this.http.get(`${this.url}/preguntas?id=` + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            let toast = this.toastController.create({
                message: "Formulario cargado",
                duration: 3000,
            });
            toast.then((toast) => toast.present());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            return response.preguntas;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            console.log("ERROR EN REPORT DETAIL");
            this.loading.dismiss();
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: "Error",
            buttons: ["OK"],
        });
        alert.then((alert) => alert.present());
    }
    retryPostReporte({ reporteId }) {
        console.log("Suscribimos??");
        const subscription = this.networkService.networkConnection$.subscribe((connection) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("El valor de connection es", connection);
            if (connection) {
                const reporte = yield this.storage.get(`reporte-${reporteId}`);
                console.log("El reporte seria", reporte);
                console.log("Enviamos porque volvio la conexion", "el reporte id es", reporteId);
                this.postReporte(JSON.parse(reporte));
                subscription.unsubscribe();
            }
            else {
                console.log("Dejamos de tenerla");
            }
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])("Esperamos conexion");
    }
    sendReporte({ request, reporteId, msj }) {
        console.log("Send reporte", reporteId);
        return this.http.post(`${this.url}/mensaje`, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((response) => {
            let toast = this.toastController.create({
                message: "Reporte enviado correctamente",
                duration: 6000,
            });
            toast.then((toast) => toast.present());
            this.router.navigate(["inside"]);
            this.sms.send("04126230595", msj);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => {
            console.log("ERROR EN SEND REPORTE");
            console.log("Tuvimos un error", err);
            alert(err.message);
            throw new Error(err);
        }));
    }
    postReporte({ form, coords, reporteId }) {
        const formMeta = Object.keys(form)
            .filter((_, index) => +index < 2)
            .map((key) => form[key]);
        let [usuarioId, fechahora] = formMeta;
        fechahora = fechahora.split(" ");
        let fecha = fechahora[0].split("/");
        let hora = fechahora[1].split(":");
        let msj = `roae r${reporteId} i${usuarioId} h${hora[0]}${hora[1]}`;
        const reportesSeleccion = [1, 3, 5];
        const reportesUnicoValor = [2, 4];
        // Este es para parsear del formulario con los checkbox
        if (reportesSeleccion.includes(+reporteId)) {
            const formData = Object.keys(form)
                // Filtramos los primeros dos elementos que son usuarioId y hora
                .filter((key, index) => +index > 1 && typeof form[key] === "boolean")
                // Hacemos el indice id, asi evitamos usar la numeracion que viene de preguntas$
                .map((key, index) => ({ id: index + 1, value: form[key] }));
            // Filtramos las que sean falsas
            const respuestas = formData
                .filter((item) => item.value)
                .map((item) => (item.id > 9 ? item.id : `0${item.id}`));
            const respuestasString = respuestas.join("");
            msj = `${msj} s${respuestasString}`;
        }
        // Este es para parsear del formulario con una solo input
        if (reportesUnicoValor.includes(+reporteId)) {
            // Asumimos que el unico valor numerico en el formulario es el que estamos buscando
            const key = Object.keys(form).find((key) => typeof form[key] === "number");
            const value = form[key];
            msj = `${msj} n${value}`;
        }
        const request = Object.assign({ msj, hora: `${hora[0]}${hora[1]}`, fecha: `${fecha[2]}-${fecha[1]}-${fecha[0]}`, fuenteid: "1", tipomensajeid: "1", cuestid: reporteId }, coords);
        if (this.networkService.networkConnection$.value) {
            return this.sendReporte({ request, reporteId, msj });
        }
        else {
            this.showAlert("No se ha encontrado conexión a internet, abriremos la aplicación de mensajería en breves con el resultado de su formulario para enviar vía SMS");
            setTimeout(() => {
                // Aquí tendrás que cambiar el numero por el que toca
                this.openSms({ message: msj, number: "04126230595" });
            }, 5000);
        }
    }
    openSms({ message, number }) {
        const link = document.createElement("a");
        link.href = `sms://${number}?body=${message}`;
        link.click();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"] },
    { type: _network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
    },
    //  { path: '', redirectTo: 'inside', pathMatch: 'full' },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then((m) => m.LoginPageModule),
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuardService"]],
    },
    {
        path: "inside",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-inside-inside-module */ "pages-inside-inside-module").then(__webpack_require__.bind(null, /*! ./pages/inside/inside.module */ "/JZB")).then((m) => m.InsidePageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
    },
    {
        path: "reporte/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reporte-reporte-module */ "pages-reporte-reporte-module").then(__webpack_require__.bind(null, /*! ./pages/reporte/reporte.module */ "UkCo")).then((m) => m.ReportePageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
    },
    {
        path: "tutorial",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tutorial-tutorial-module */ "pages-tutorial-tutorial-module").then(__webpack_require__.bind(null, /*! ./pages/tutorial/tutorial.module */ "pwtZ")).then((m) => m.TutorialModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
    },
    {
        path: "about",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then((m) => m.AboutModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map