(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+XmF":
    /*!***************************************!*\
      !*** ./src/app/guards/login.guard.ts ***!
      \***************************************/

    /*! exports provided: LoginGuardService */

    /***/
    function XmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuardService", function () {
        return LoginGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var LoginGuardService = /*#__PURE__*/function () {
        function LoginGuardService(auth) {
          _classCallCheck(this, LoginGuardService);

          this.auth = auth;
        }

        _createClass(LoginGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.getToken();
          }
        }]);

        return LoginGuardService;
      }();

      LoginGuardService.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      LoginGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginGuardService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\alfredo\roae\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5dVO":
    /*!********************************************!*\
      !*** ./src/app/services/loader.service.ts ***!
      \********************************************/

    /*! exports provided: LoaderService */

    /***/
    function dVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService(loaderCtrl) {
          _classCallCheck(this, LoaderService);

          this.loaderCtrl = loaderCtrl;
          this.loader = null;
        }

        _createClass(LoaderService, [{
          key: "show",
          value: function show(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.loader !== null) {
                        this.loader.dismiss();
                        this.loader = null;
                      }

                      _context.next = 3;
                      return this.loaderCtrl.create({
                        spinner: "crescent",
                        message: message ? message : "Cargando..."
                      });

                    case 3:
                      this.loader = _context.sent;
                      return _context.abrupt("return", this.loader.present());

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hide",
          value: function hide() {
            if (this.loader !== null) {
              this.loader.dismiss();
              this.loader = null;
            }
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], LoaderService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        //url: 'https://thingproxy.freeboard.io/fetch/https://api.redobservacionae.org',
        url: 'https://api.redobservacionae.org',
        constants: {
          TOKEN_KEY: '',
          USER_KEY: 'USER'
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

      /***/
    },

    /***/
    "PC4I":
    /*!***************************************!*\
      !*** ./src/app/interceptors/index.ts ***!
      \***************************************/

    /*! exports provided: httpInterceptorProviders */

    /***/
    function PC4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
        return httpInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.interceptor */
      "RDNO");
      /* "Barrel" of Http Interceptors */

      /** Http interceptor providers in outside-in order */


      var httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "RDNO":
    /*!**************************************************!*\
      !*** ./src/app/interceptors/auth.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function RDNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "fwsW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TOKEN_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].constants.TOKEN_KEY;
      /** Pass untouched request through to the next request handler. */

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(storage, alertController) {
          _classCallCheck(this, AuthInterceptor);

          this.storage = storage;
          this.alertController = alertController;
        }

        _createClass(AuthInterceptor, [{
          key: "showAlert",
          value: function showAlert(msg) {
            var alert = this.alertController.create({
              message: msg,
              header: "Error",
              buttons: ["OK"]
            });
            alert.then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.storage.get(TOKEN_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (token) {
              // Si no hay token pasamos la request directamente
              if (!token) {
                return next.handle(req);
              } // Si lo tenemos, clonamos la request, enchufamos el token en los headers y la pasamos al handler


              var authReq = req.clone({
                headers: req.headers.set("api_token", token)
              });
              return next.handle(authReq);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this.showAlert("Error con conexión intente mas tarde.");
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/network.service */
      "dwY0");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authService, router, network) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authService = authService;
          this.router = router;
          this.network = network;
          this.initializeApp();
          this.network.listenNetworkChanges();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();
            });
          }
        }, {
          key: "openTutorial",
          value: function openTutorial() {
            // this.menu.enable(false);
            this.storage.set("ion_did_tutorial", true);
            this.router.navigateByUrl("/tutorial");
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
      })], AppComponent);
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.checkToken();
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuardService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: jwtOptionsFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
        return jwtOptionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "fwsW");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _interceptors_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./interceptors/index */
      "PC4I");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "h+qT");
      /* harmony import */


      var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/sms/ngx */
      "I7pt");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "/+Rg");
      /* harmony import */


      var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/uid/ngx */
      "JN8Z");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");

      function jwtOptionsFactory(storage) {
        return {
          tokenGetter: function tokenGetter() {
            return storage.get('access_token');
          },
          whitelistedDomains: ['localhost']
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
            useFactory: jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__["NativeGeocoder"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_19__["UniqueDeviceID"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _interceptors_index__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "dwY0":
    /*!*********************************************!*\
      !*** ./src/app/services/network.service.ts ***!
      \*********************************************/

    /*! exports provided: NetworkService */

    /***/
    function dwY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
        return NetworkService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NetworkService = /*#__PURE__*/function () {
        function NetworkService(network) {
          _classCallCheck(this, NetworkService);

          this.network = network;
          this.networkConnection$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        }

        _createClass(NetworkService, [{
          key: "listenNetworkChanges",
          value: function listenNetworkChanges() {
            var _this3 = this;

            console.log("Will listen to network changes!");
            this.disconnectSubscription = this.network.onDisconnect().subscribe(function () {
              _this3.networkConnection$.next(false);
            });
            this.connectSubscription = this.network.onConnect().subscribe(function () {
              setTimeout(function () {
                // console.log("Network type", this.network.type);
                // if (this.network.type === "wifi") {
                _this3.networkConnection$.next(true); // }

              }, 3000);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.disconnectSubscription.unsubscribe();
            this.connectSubscription.unsubscribe();
          }
        }]);

        return NetworkService;
      }();

      NetworkService.ctorParameters = function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
        }];
      };

      NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], NetworkService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "fwsW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/sms/ngx */
      "I7pt");
      /* harmony import */


      var _network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./network.service */
      "dwY0");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./loader.service */
      "5dVO"); // Declaro esta constante dentro de environment para que sea accesible desde otros modulos


      var _environments_environ = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].constants,
          TOKEN_KEY = _environments_environ.TOKEN_KEY,
          USER_KEY = _environments_environ.USER_KEY;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, helper, storage, plt, alertController, router, loadingController, toastController, sms, networkService, loaderService) {
          _classCallCheck(this, AuthService);

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

        _createClass(AuthService, [{
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.plt.ready();

                    case 2:
                      _context2.next = 4;
                      return this.storage.create();

                    case 4:
                      _context2.next = 6;
                      return this.loadingController.create({
                        message: "Cargando..."
                      });

                    case 6:
                      this.loading = _context2.sent;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Este metodo se llama desde el guard de login, si no tenemos el token quiere decir que podemos entrar a la pagina del login

        }, {
          key: "getToken",
          value: function getToken() {
            var _this4 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.storage.get(TOKEN_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (token) {
              if (!token) {
                return true;
              }

              _this4.router.navigate(["inside"]);

              return false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
              console.log("Tuvimos error de token", err);
              throw new Error(err);
            }));
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            var _this5 = this;

            // Muestra la splashscreen mientras hacemos la peticion
            return this.http.get("".concat(this.url, "/view")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              if (response.res) {
                _this5.loading.dismiss();

                return true;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              _this5.loading.dismiss();

              if (e.status === 401) {
                _this5.storage.remove(TOKEN_KEY);

                _this5.router.navigate(["login"]);
              }

              throw new Error(e);
            }));
          }
        }, {
          key: "checkReports",
          value: function checkReports() {
            var _this6 = this;

            // Muestra la splashscreen mientras hacemos la peticion
            return this.http.get("".concat(this.url, "/reports")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              if (response.res) {
                // Si es valida ocultamos la splashscreen
                _this6.loading.dismiss();

                return true;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              console.log("Error en checkReports");

              _this6.loading.dismiss();

              if (e.status === 401) {
                _this6.storage.remove(TOKEN_KEY);

                _this6.router.navigate(["login"]);
              }

              throw new Error(e);
            }));
          }
        }, {
          key: "register",
          value: function register(credentials) {
            var _this7 = this;

            return this.http.post("".concat(this.url, "/login"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              _this7.showAlert(e.error.msg);

              throw new Error(e);
            }));
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            return this.storage.get(USER_KEY);
          }
        }, {
          key: "login",
          value: function login(credentials) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loaderService.show();

                    case 2:
                      return _context5.abrupt("return", this.http.post("".concat(this.url, "/login"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var TOKEN_NEW, toast;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(result.res === false)) {
                                    _context3.next = 4;
                                    break;
                                  }

                                  this.loaderService.hide();
                                  this.showAlert("Credenciales inválidas o fallo en la conexión");
                                  return _context3.abrupt("return");

                                case 4:
                                  // Recuerda que tambien puedes hacer result.token y escribes menos
                                  this.storage.set(USER_KEY, credentials.usuario);
                                  TOKEN_NEW = this.storage.set(TOKEN_KEY, result["token"]);
                                  toast = this.toastController.create({
                                    message: "Usuario autorizado!!",
                                    duration: 6000
                                  });
                                  toast.then(function (toast) {
                                    return toast.present();
                                  });
                                  this.router.navigate(["tutorial"]); // Dejo esto comentado porque el token que devuelven no es un JWT.
                                  // this.usuario = this.helper.decodeToken(result['token']);

                                  // Dejo esto comentado porque el token que devuelven no es un JWT.
                                  // this.usuario = this.helper.decodeToken(result['token']);
                                  this.loaderService.hide();
                                  this.authenticationState.next(true);

                                case 11:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  this.loaderService.hide();
                                  this.showAlert("Credenciales inválidas o fallo en la conexión");
                                  throw new Error(JSON.stringify(e));

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      })).subscribe());

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this9 = this;

            this.loading.present();
            return this.http.post("".concat(this.url, "/logout"), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
              console.log(res);

              _this9.storage.remove(TOKEN_KEY).then(function () {
                _this9.router.navigate(["login"]);

                _this9.authenticationState.next(false);

                _this9.loading.dismiss();

                return _this9.storage.remove(USER_KEY);
              }).then(function () {
                console.log("Logout done!");
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              _this9.loading.dismiss();

              _this9.showAlert(e.error.msg);

              throw new Error(e);
            }));
          }
        }, {
          key: "getSpecialData",
          value: function getSpecialData() {
            // Este vendria siendo el metodo que necesitas aqui para verificar tu token
            // No tienes que meter el header por cada request para autenticarla, el AuthInterceptor se encarga de poner el header si lo encuentra para cada request
            return this.checkToken();
          }
        }, {
          key: "getReports",
          value: function getReports() {
            var _this10 = this;

            this.loading.present();
            return this.http.get("".concat(this.url, "/reports")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              var toast = _this10.toastController.create({
                message: "Reportes cargados",
                duration: 3000
              });

              _this10.loading.dismiss();

              toast.then(function (toast) {
                return toast.present();
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              return response.reportes;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              console.log("ERROR EN GET REPORTS");

              _this10.loading.dismiss();

              _this10.showAlert("Error buscando reportes");

              throw new Error(e);
            }));
          }
        }, {
          key: "getReportsListos",
          value: function getReportsListos(id) {
            var _this11 = this;

            this.loading.present();
            return this.http.get("".concat(this.url, "/reportado?id=") + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              var toast = _this11.toastController.create({
                message: "Reportes cargados",
                duration: 3000
              });

              _this11.loading.dismiss();

              toast.then(function (toast) {
                return toast.present();
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              return response.listos;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              console.log("ERROR EN GET REPORTS LISTOS");

              _this11.loading.dismiss();

              _this11.showAlert("Error buscando reportes");

              throw new Error(e);
            }));
          }
        }, {
          key: "getReportDetail",
          value: function getReportDetail(id) {
            var _this12 = this;

            return this.http.get("".concat(this.url, "/preguntas?id=") + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              var toast = _this12.toastController.create({
                message: "Formulario cargado",
                duration: 3000
              });

              toast.then(function (toast) {
                return toast.present();
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              return response.preguntas;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              console.log("ERROR EN REPORT DETAIL");

              _this12.loading.dismiss();

              _this12.showAlert(e.error.msg);

              throw new Error(e);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var alert = this.alertController.create({
              message: msg,
              header: "Error",
              buttons: ["OK"]
            });
            alert.then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "retryPostReporte",
          value: function retryPostReporte(_ref) {
            var _this13 = this;

            var reporteId = _ref.reporteId;
            console.log("Suscribimos??");
            var subscription = this.networkService.networkConnection$.subscribe(function (connection) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var reporte;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log("El valor de connection es", connection);

                        if (!connection) {
                          _context6.next = 11;
                          break;
                        }

                        _context6.next = 4;
                        return this.storage.get("reporte-".concat(reporteId));

                      case 4:
                        reporte = _context6.sent;
                        console.log("El reporte seria", reporte);
                        console.log("Enviamos porque volvio la conexion", "el reporte id es", reporteId);
                        this.postReporte(JSON.parse(reporte));
                        subscription.unsubscribe();
                        _context6.next = 12;
                        break;

                      case 11:
                        console.log("Dejamos de tenerla");

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])("Esperamos conexion");
          }
        }, {
          key: "sendReporte",
          value: function sendReporte(_ref2) {
            var _this14 = this;

            var request = _ref2.request,
                reporteId = _ref2.reporteId,
                msj = _ref2.msj;
            console.log("Send reporte", reporteId);
            return this.http.post("".concat(this.url, "/mensaje"), request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (response) {
              var toast = _this14.toastController.create({
                message: "Reporte enviado correctamente",
                duration: 6000
              });

              toast.then(function (toast) {
                return toast.present();
              });

              _this14.router.navigate(["inside"]);

              _this14.sms.send("04126230595", msj);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
              console.log("ERROR EN SEND REPORTE");
              console.log("Tuvimos un error", err);
              alert(err.message);
              throw new Error(err);
            }));
          }
        }, {
          key: "postReporte",
          value: function postReporte(_ref3) {
            var _this15 = this;

            var form = _ref3.form,
                coords = _ref3.coords,
                reporteId = _ref3.reporteId;
            var formMeta = Object.keys(form).filter(function (_, index) {
              return +index < 2;
            }).map(function (key) {
              return form[key];
            });

            var _formMeta = _slicedToArray(formMeta, 2),
                usuarioId = _formMeta[0],
                fechahora = _formMeta[1];

            fechahora = fechahora.split(" ");
            var fecha = fechahora[0].split("/");
            var hora = fechahora[1].split(":");
            var msj = "roae r".concat(reporteId, " i").concat(usuarioId, " h").concat(hora[0]).concat(hora[1]);
            var reportesSeleccion = [1, 3, 5];
            var reportesUnicoValor = [2, 4]; // Este es para parsear del formulario con los checkbox

            if (reportesSeleccion.includes(+reporteId)) {
              var formData = Object.keys(form) // Filtramos los primeros dos elementos que son usuarioId y hora
              .filter(function (key, index) {
                return +index > 1 && typeof form[key] === "boolean";
              }) // Hacemos el indice id, asi evitamos usar la numeracion que viene de preguntas$
              .map(function (key, index) {
                return {
                  id: index + 1,
                  value: form[key]
                };
              }); // Filtramos las que sean falsas

              var respuestas = formData.filter(function (item) {
                return item.value;
              }).map(function (item) {
                return item.id > 9 ? item.id : "0".concat(item.id);
              });
              var respuestasString = respuestas.join("");
              msj = "".concat(msj, " s").concat(respuestasString);
            } // Este es para parsear del formulario con una solo input


            if (reportesUnicoValor.includes(+reporteId)) {
              // Asumimos que el unico valor numerico en el formulario es el que estamos buscando
              var key = Object.keys(form).find(function (key) {
                return typeof form[key] === "number";
              });
              var value = form[key];
              msj = "".concat(msj, " n").concat(value);
            }

            var request = Object.assign({
              msj: msj,
              hora: "".concat(hora[0]).concat(hora[1]),
              fecha: "".concat(fecha[2], "-").concat(fecha[1], "-").concat(fecha[0]),
              fuenteid: "1",
              tipomensajeid: "1",
              cuestid: reporteId
            }, coords);

            if (this.networkService.networkConnection$.value) {
              return this.sendReporte({
                request: request,
                reporteId: reporteId,
                msj: msj
              });
            } else {
              this.showAlert("No se ha encontrado conexión a internet, abriremos la aplicación de mensajería en breves con el resultado de su formulario para enviar vía SMS");
              setTimeout(function () {
                // Aquí tendrás que cambiar el numero por el que toca
                _this15.openSms({
                  message: msj,
                  number: "04126230595"
                });
              }, 5000);
            }
          }
        }, {
          key: "openSms",
          value: function openSms(_ref4) {
            var message = _ref4.message,
                number = _ref4.number;
            var link = document.createElement("a");
            link.href = "sms://".concat(number, "?body=").concat(message);
            link.click();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }, {
          type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"]
        }, {
          type: _network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]
        }, {
          type: _loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], AuthService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guards/login.guard */
      "+XmF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
      }, //  { path: '', redirectTo: 'inside', pathMatch: 'full' },
      {
        path: "login",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuardService"]]
      }, {
        path: "inside",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-inside-inside-module */
          "pages-inside-inside-module").then(__webpack_require__.bind(null,
          /*! ./pages/inside/inside.module */
          "/JZB")).then(function (m) {
            return m.InsidePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: "reporte/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-reporte-reporte-module */
          "pages-reporte-reporte-module").then(__webpack_require__.bind(null,
          /*! ./pages/reporte/reporte.module */
          "UkCo")).then(function (m) {
            return m.ReportePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: "tutorial",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tutorial-tutorial-module */
          "pages-tutorial-tutorial-module").then(__webpack_require__.bind(null,
          /*! ./pages/tutorial/tutorial.module */
          "pwtZ")).then(function (m) {
            return m.TutorialModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: "about",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "pages-about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "UoYK")).then(function (m) {
            return m.AboutModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map