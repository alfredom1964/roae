(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inside-inside-module"], {
    /***/
    "/JZB":
    /*!***********************************************!*\
      !*** ./src/app/pages/inside/inside.module.ts ***!
      \***********************************************/

    /*! exports provided: InsidePageModule */

    /***/
    function JZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsidePageModule", function () {
        return InsidePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _inside_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inside-routing.module */
      "tNmu");
      /* harmony import */


      var _inside_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inside.page */
      "crd3");

      var InsidePageModule = function InsidePageModule() {
        _classCallCheck(this, InsidePageModule);
      };

      InsidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inside_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsidePageRoutingModule"]],
        declarations: [_inside_page__WEBPACK_IMPORTED_MODULE_6__["InsidePage"]]
      })], InsidePageModule);
      /***/
    },

    /***/
    "46sy":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inside/inside.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function sy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>APP ROAE</ion-title>\n    <ion-button slot=\"end\" color=\"warning\" (click)=\"logout()\">Salir</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-slide>\n      <img src=\"assets/img/logonuevo.png\" class=\"slide-image\" />\n      <ion-item-sliding *ngFor=\"let reporte of reportes$ | async\" [routerLink]=\"['../reporte/' + reporte.num]\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">{{ reporte.nombre }}</ion-label>\n          <ion-label>{{ reporte.hora[0] }}{{reporte.hora[1]}}:{{ reporte.hora[2] }}{{reporte.hora[3]}}</ion-label>\n\n        </ion-item>\n      </ion-item-sliding>\n      <ion-item-sliding *ngFor=\"let listo of listos$ | async\" [routerLink]=\"['../reporte/' + reporte.num]\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">{{ listo.cuest_id }}</ion-label>\n          <ion-label>{{ reporte.hora[0] }}{{reporte.hora[1]}}:{{ reporte.hora[2] }}{{reporte.hora[3]}}</ion-label>\n\n        </ion-item>\n      </ion-item-sliding>\n\n    </ion-slide>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/about\">\n      <ion-icon name=\"help-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "A0Dp":
    /*!***********************************************!*\
      !*** ./src/app/pages/inside/inside.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function A0Dp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 40%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnNpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBQUY7O0FBRUU7RUFDRSxxQ0FBQTtBQUFKIiwiZmlsZSI6Imluc2lkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWxpc3Qge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogNDAlO1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMzZweCAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcblxyXG4gIGIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "crd3":
    /*!*********************************************!*\
      !*** ./src/app/pages/inside/inside.page.ts ***!
      \*********************************************/

    /*! exports provided: InsidePage */

    /***/
    function crd3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsidePage", function () {
        return InsidePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inside_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inside.page.html */
      "46sy");
      /* harmony import */


      var _inside_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inside.page.scss */
      "A0Dp");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "fwsW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // Declaro esta constante dentro de environment para que sea accesible desde otros modulos


      var TOKEN_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].constants.TOKEN_KEY;

      var InsidePage = /*#__PURE__*/function () {
        function InsidePage(authService, storage, toastController) {
          _classCallCheck(this, InsidePage);

          this.authService = authService;
          this.storage = storage;
          this.toastController = toastController;
          this.data = "";
        }

        _createClass(InsidePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var didTutorial;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.listos$ = this.authService.getReportsListos(1);
                      this.reportes$ = this.authService.getReports();
                      _context.next = 4;
                      return this.storage.get("ion_did_tutorial");

                    case 4:
                      didTutorial = _context.sent;
                      console.log(didTutorial);

                      if (!didTutorial) {
                        console.log("No ha hecho el tutorial");
                      }

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reloadReports",
          value: function reloadReports() {// this.reportes$ = this.authService.getReports();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this = this;

            this.authService.logout().subscribe(function () {
              var toast = _this.toastController.create({
                message: "Ud. salio del sistema",
                duration: 3000
              });

              toast.then(function (toast) {
                return toast.present();
              });
            });
          }
        }]);

        return InsidePage;
      }();

      InsidePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      InsidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-inside",
        template: _raw_loader_inside_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inside_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InsidePage);
      /***/
    },

    /***/
    "tNmu":
    /*!*******************************************************!*\
      !*** ./src/app/pages/inside/inside-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InsidePageRoutingModule */

    /***/
    function tNmu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsidePageRoutingModule", function () {
        return InsidePageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _inside_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inside.page */
      "crd3");

      var routes = [{
        path: '',
        component: _inside_page__WEBPACK_IMPORTED_MODULE_3__["InsidePage"]
      }];

      var InsidePageRoutingModule = function InsidePageRoutingModule() {
        _classCallCheck(this, InsidePageRoutingModule);
      };

      InsidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InsidePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inside-inside-module-es5.js.map