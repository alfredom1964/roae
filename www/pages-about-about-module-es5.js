(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
    /***/
    "/qKW":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function qKW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-button slot=\"start\">\r\n        <ion-back-button defaultHref=\"inside\"></ion-back-button>\r\n      </ion-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"about-header\">\r\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\r\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\r\n  </div>\r\n\r\n  <div class=\"about-info\">\r\n    <h3 class=\"ion-padding-top ion-padding-start\">Reportes</h3>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end\">\r\n      En los reportes Ud. debe responder las preguntas que se le indican.  Las preguntas de seleccion solo marque aquellas donde la respuesta es afirmativa.  \r\n      Las preguntas numéricas son obligatorias.  La hora y fecha serán enviadas directamente desde el telefono, al igual que la geolocalización si es posible y la información del observador. \r\n    </p>\r\n  </div>  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "P6uQ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function P6uQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about */
      "hwYj");

      var routes = [{
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "UoYK":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutModule */

    /***/
    function UoYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
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


      var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about */
      "hwYj");
      /* harmony import */


      var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../about-popover/about-popover */
      "d4ui");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about-routing.module */
      "P6uQ");

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
      })], AboutModule);
      /***/
    },

    /***/
    "d4ui":
    /*!******************************************************!*\
      !*** ./src/app/pages/about-popover/about-popover.ts ***!
      \******************************************************/

    /*! exports provided: PopoverPage */

    /***/
    function d4ui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
        return PopoverPage;
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

      var PopoverPage = /*#__PURE__*/function () {
        function PopoverPage(popoverCtrl) {
          _classCallCheck(this, PopoverPage);

          this.popoverCtrl = popoverCtrl;
        }

        _createClass(PopoverPage, [{
          key: "support",
          value: function support() {
            // this.app.getRootNavs()[0].push('/support');
            this.popoverCtrl.dismiss();
          }
        }, {
          key: "close",
          value: function close(url) {
            window.open(url, '_blank');
            this.popoverCtrl.dismiss();
          }
        }]);

        return PopoverPage;
      }();

      PopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
      })], PopoverPage);
      /***/
    },

    /***/
    "hwYj":
    /*!**************************************!*\
      !*** ./src/app/pages/about/about.ts ***!
      \**************************************/

    /*! exports provided: AboutPage */

    /***/
    function hwYj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.html */
      "/qKW");
      /* harmony import */


      var _about_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.scss */
      "inNI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../about-popover/about-popover */
      "d4ui");

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage(popoverCtrl) {
          _classCallCheck(this, AboutPage);

          this.popoverCtrl = popoverCtrl;
          this.location = 'madison';
          this.conferenceDate = '2047-05-17';
          this.selectOptions = {
            header: 'Select a Location'
          };
        }

        _createClass(AboutPage, [{
          key: "presentPopover",
          value: function presentPopover(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverCtrl.create({
                        component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"],
                        event: event
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-about',
        template: _raw_loader_about_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutPage);
      /***/
    },

    /***/
    "inNI":
    /*!****************************************!*\
      !*** ./src/app/pages/about/about.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function inNI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: rgba(68, 44, 44, 0.932);\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/encabezado.png);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 140%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTs7O0VBR0UsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUVBLFVBQUE7RUFFQSxxQ0FBQTtBQU5GOztBQVNBO0VBQ0UsaURBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FBUEY7O0FBVUE7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7QUFSRiIsImZpbGUiOiJhYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIGlvbi1idXR0b24sXHJcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiByZ2JhKDY4LCA0NCwgNDQsIDAuOTMyKTtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9lbmNhYmV6YWRvLnBuZyk7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGgzIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIGlPUyBPbmx5XHJcbiAqL1xyXG5cclxuLmlvcyAuYWJvdXQtaW5mbyB7XHJcbiAgLS1pb24tcGFkZGluZzogMTlweDtcclxufVxyXG5cclxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-about-module-es5.js.map