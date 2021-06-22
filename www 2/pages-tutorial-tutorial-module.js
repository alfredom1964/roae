(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "Oyej":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>APP ROAE</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color='warning' (click)=\"startApp()\" [hidden]=\"!showSkip\">Saltar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"true\"> \r\n    <ion-slide>\r\n      <img src=\"assets/img/logonuevo.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">\r\n        Bienvenido a\r\n        <b>App ROAE</b>\r\n      </h2>\r\n      <h3>\r\n       Red de Observación Electoral</h3> \r\n       <h3> Asamblea de Educación\r\n       </h3>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/img/ica-slidebox-img-2.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">¿Que es App ROAE?</h2>\r\n      <p>\r\n        <b>App ROAE</b> es una aplicación para realizar de forma rapida y simple la observación electoral tutelada \r\n        por la Red de Observación de la Asamblea de Educación</p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/img/ica-slidebox-img-3.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">¿Como uso App ROAE?</h2>\r\n      <p>\r\n        Seleccione el reporte a realizar y responda las preguntas presentadas en el reporte, marque solo las preguntas cuya respuesta sea afirmativa y una vez este completo oprima el boton de enviar</p>\r\n          <p>Si el boton de <b>ENVIAR</b> no se activa es porque le falta responder alguna pregunta, las preguntas indicadas con <b>*</b> son obligatorias</p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/img/ica-slidebox-img-4.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">¿Listo para reportar?</h2>\r\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\r\n        Continuar!\r\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-slide>\r\n  </ion-slides>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "eBw0":
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tutorial_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tutorial.html */ "Oyej");
/* harmony import */ var _tutorial_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial.scss */ "sFkX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "fwsW");







let TutorialPage = class TutorialPage {
    constructor(menu, router, storage) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
    }
    startApp() {
        this.router
            .navigateByUrl('/inside', { replaceUrl: true })
            .then(() => this.storage.set('ion_did_tutorial', true));
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }
    ionViewWillEnter() {
        this.storage.get('ion_did_tutorial').then(res => {
            if (res === true) {
                this.router.navigateByUrl('/login', { replaceUrl: true });
            }
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }
};
TutorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
TutorialPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides', { static: true },] }]
};
TutorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-tutorial',
        template: _raw_loader_tutorial_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tutorial_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TutorialPage);



/***/ }),

/***/ "kK4k":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial */ "eBw0");




const routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ "pwtZ":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial */ "eBw0");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "kK4k");






let TutorialModule = class TutorialModule {
};
TutorialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
        ],
        declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
        entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
    })
], TutorialModule);



/***/ }),

/***/ "sFkX":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: justify;\n  text-justify: inter-word;\n  color: var(--ion-color-step-600, #60646b);\n}\n\nb {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0dXRvcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDRix5Q0FBQTtBQUNGOztBQUVFO0VBQ0UscUNBQUE7QUFDSiIsImZpbGUiOiJ0dXRvcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMzZweCAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgICB0ZXh0LWp1c3RpZnk6aW50ZXItd29yZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxuICBiIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module.js.map