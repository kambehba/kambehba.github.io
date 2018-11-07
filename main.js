(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activeProject.ts":
/*!**********************************!*\
  !*** ./src/app/activeProject.ts ***!
  \**********************************/
/*! exports provided: ActiveProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveProject", function() { return ActiveProject; });
var ActiveProject = /** @class */ (function () {
    function ActiveProject() {
        this.image = "";
        this.address = "";
        this.cashFlow = "";
        this.netOperatingIncome = "";
    }
    return ActiveProject;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main\r\n{\r\n  \r\n  display: -ms-grid;\r\n  \r\n  display: grid;\r\n  -ms-grid-rows: .1fr .1fr .1fr .4fr .4fr .4fr .1fr .1fr .3fr .1fr .4fr .1fr .1fr .1fr .1fr 1fr .3fr 1fr;\r\n      grid-template-rows: .1fr .1fr .1fr .4fr .4fr .4fr .1fr .1fr .3fr .1fr .4fr .1fr .1fr .1fr .1fr 1fr .3fr 1fr;\r\n  -ms-grid-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n      grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  border-style: solid;\r\n  grid-gap: 5px;\r\n \r\n  \r\n}\r\n\r\n.logo\r\n{\r\n  -ms-grid-row:2;\r\n      grid-row-start:2;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:2;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:3;\r\n  border-bottom-style: solid;\r\n  border-color: chartreuse;\r\n}\r\n\r\n.title\r\n{\r\n  background-color: rgb(103, 90, 216);\r\n  -ms-grid-row:2;\r\n      grid-row-start:2;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:2;\r\n  -ms-grid-column:4;\r\n      grid-column-start:4;\r\n  -ms-grid-column-span:8;\r\n  grid-column-end:12;\r\n  \r\n}\r\n\r\n.temp\r\n{\r\n  -ms-grid-row:2;\r\n      grid-row-start:2;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:2;\r\n  -ms-grid-column:11;\r\n      grid-column-start:11;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:11;\r\n\r\n  padding: 40px;\r\n  background-color: rgb(97, 61, 228);\r\n}\r\n\r\n.blank\r\n{\r\n  background-color: rgb(103, 90, 216);\r\n  \r\n \r\n}\r\n\r\n/* .cityInfo\r\n{\r\n  \r\n\r\n} */\r\n\r\n.sidebar\r\n{\r\n  background-color: rgb(243, 105, 232);\r\n  -ms-grid-row:3;\r\n      grid-row-start:3;\r\n  -ms-grid-row-span:14;\r\n  grid-row-end:17;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:1;\r\n  grid-column-end:4;\r\n}\r\n\r\n.content\r\n{\r\n  background-color: rgb(102, 172, 80);\r\n  -ms-grid-row:3;\r\n      grid-row-start:3;\r\n  -ms-grid-row-span:14;\r\n  grid-row-end:17;\r\n  -ms-grid-column:4;\r\n      grid-column-start:4;\r\n  -ms-grid-column-span:8;\r\n  grid-column-end:12;\r\n}\r\n\r\n.footer\r\n{\r\n  background-color: rgb(243, 86, 65);\r\n  -ms-grid-row:17;\r\n      grid-row-start:17;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:17;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:9;\r\n  grid-column-end:12;\r\n}\r\n\r\n.homeButton\r\n{\r\n  -ms-grid-row:4;\r\n      grid-row-start:4;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:4;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:3;\r\n}\r\n\r\n.projectButton\r\n{\r\n  -ms-grid-row:5;\r\n      grid-row-start:5;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:5;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:3;\r\n\r\n  \r\n}\r\n\r\n.aboutButton\r\n{\r\n  -ms-grid-row:6;\r\n      grid-row-start:6;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:6;\r\n  -ms-grid-column:3;\r\n      grid-column-start:3;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:3;\r\n \r\n}\r\n\r\n.buttons\r\n{\r\n  background: rgba(244, 253, 109, 0.836);\r\n  border-radius: 25px;\r\n  border-color: rgb(35, 35, 41);\r\n  width: 120px;\r\n  height: 30px;\r\n  margin-left: 15px;\r\n  font-weight: bolder;\r\n  \r\n}\r\n\r\n.i1\r\n{\r\n  /* padding: 1em;\r\n  width: 70%;\r\n  height: 70%; */\r\n\r\n  \r\n}\r\n\r\n.projectImage\r\n{\r\n  -ms-grid-row:4;\r\n      grid-row-start:4;\r\n  -ms-grid-row-span:8;\r\n  grid-row-end:12;\r\n  -ms-grid-column:8;\r\n      grid-column-start:8;\r\n  -ms-grid-column-span:5;\r\n  grid-column-end:13;\r\n\r\n}\r\n\r\n.nextButton\r\n{\r\n  -ms-grid-row:12;\r\n      grid-row-start:12;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:12;\r\n  -ms-grid-column:8;\r\n      grid-column-start:8;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:8;\r\n}\r\n\r\n.previousButton\r\n{\r\n  -ms-grid-row:12;\r\n      grid-row-start:12;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:12;\r\n  -ms-grid-column:9;\r\n      grid-column-start:9;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:9;\r\n}\r\n\r\n.projectText\r\n{\r\n  -ms-grid-row:5;\r\n      grid-row-start:5;\r\n  -ms-grid-row-span:3;\r\n  grid-row-end:8;\r\n  -ms-grid-column:5;\r\n      grid-column-start:5;\r\n  -ms-grid-column-span:2;\r\n  grid-column-end:7;\r\n  font-size: larger;\r\n  font-family: fantasy;\r\n  font-weight: bold;\r\n}\r\n\r\n.footerText\r\n{\r\n  padding: 1em;\r\n  -ms-grid-row:17;\r\n      grid-row-start:17;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:17;\r\n  -ms-grid-column:6;\r\n      grid-column-start:6;\r\n  -ms-grid-column-span:4;\r\n  grid-column-end:10;\r\n}\r\n\r\n.address\r\n{\r\n  -ms-grid-row:5;\r\n      grid-row-start:5;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:5;\r\n  -ms-grid-column:5;\r\n      grid-column-start:5;\r\n  -ms-grid-column-span:2;\r\n  grid-column-end:7;\r\n\r\n}\r\n\r\n.netOperatingIncome\r\n{\r\n  -ms-grid-row:6;\r\n      grid-row-start:6;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:6;\r\n  -ms-grid-column:5;\r\n      grid-column-start:5;\r\n  -ms-grid-column-span:2;\r\n  grid-column-end:7;\r\n\r\n}\r\n\r\n.cashFlow\r\n{\r\n  -ms-grid-row:7;\r\n      grid-row-start:7;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:7;\r\n  -ms-grid-column:5;\r\n      grid-column-start:5;\r\n  -ms-grid-column-span:2;\r\n  grid-column-end:7;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n    <div class=\"logo\">\r\n            <img src=\"../assets/images/logo2.png\">\r\n           \r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        \r\n      \r\n\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"sidebar\">\r\n       \r\n\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n       \r\n\r\n    </div>\r\n\r\n\r\n    \r\n    <div class=\"footer\">\r\n         \r\n    </div>\r\n\r\n    <div class=\"footerText\">\r\n            PARSEN HOMES LLC - copy right 2018\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"temp\">\r\n            Orlando : 78 F - 12:35 AM\r\n\r\n    </div>\r\n\r\n    <div class=\"homeButton\"> <button class=\"buttons\"  (click)=\"OnHomeClicked()\">Home</button></div>\r\n\r\n    <div class=\"projectButton\"> <button class=\"buttons\"  (click)=\"OnProjectsClicked()\">Projects</button></div>\r\n\r\n    <div class=\"aboutButton\"> <button class=\"buttons\"  (click)=\"OnAboutClicked()\">About</button></div>\r\n\r\n    <div class=\"projectImage\" *ngIf=\"showProjects\">\r\n            <!-- <img class=\"i1\" src='../assets/images/i1.jpg'> -->\r\n            <img class=\"i1\" src={{activeProject.image}}>\r\n    </div>\r\n\r\n    <div class=\"nextButton\" *ngIf=\"showProjects\"> <button class=\"buttons\"  (click)=\"OnAboutClicked()\">prev</button></div>\r\n    <div class=\"previousButton\" *ngIf=\"showProjects\"> <button class=\"buttons\"  (click)=\"OnAboutClicked()\">next</button></div>\r\n\r\n    <div class=\"projectText address\" *ngIf=\"showProjects\">\r\n            {{activeProject.address}}\r\n\r\n    </div>\r\n\r\n    <div class=\"projectText netOperatingIncome\" *ngIf=\"showProjects\">\r\n            Net Opearting Income: ${{activeProject.netOperatingIncome}}\r\n\r\n    </div>\r\n\r\n    <div class=\"projectText cashFlow\" *ngIf=\"showProjects\">\r\n            Cash Flow: ${{activeProject.cashFlow}}\r\n\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"projectText\" *ngIf=\"showProjects\">\r\n        {{activeProject.address}}\r\n        Net Operating Income : {{activeProject.netOperatingIncome}} \r\n        Cash Flow: {{activeProject.cashFlow}} \r\n   \r\n    </div> -->\r\n\r\n   \r\n   \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _activeProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeProject */ "./src/app/activeProject.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showHome = true;
        this.showProjects = false;
        this.showAbout = false;
        console.log('Constructor initialised');
        this.gg = '../assets/images/i1.jpg';
        this.jj = 'i1.jpg';
        this.ff = "6148 Buck Trail rd Indianapolis IN Net Operating Income : $12000 Cash Flow : $500";
        var activeProject = new _activeProject__WEBPACK_IMPORTED_MODULE_1__["ActiveProject"]();
        // this.activeProject.address = "dsafsd";
        activeProject.image = '../assets/images/i1.jpg';
        activeProject.cashFlow = 'dddd';
        activeProject.address = 'sas';
        activeProject.netOperatingIncome = 'asa';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.activeProject = { address: "6148 Buck Trail rd Indianapolis IN", netOperatingIncome: "12000", cashFlow: "500", image: "../assets/images/i1.jpg" };
    };
    AppComponent.prototype.OnHomeClicked = function () {
        this.showHome = true;
        this.showProjects = false;
        this.showAbout = false;
    };
    AppComponent.prototype.OnProjectsClicked = function () {
        this.showHome = false;
        this.showProjects = true;
        this.showAbout = false;
    };
    AppComponent.prototype.OnAboutClicked = function () {
        this.showHome = false;
        this.showProjects = false;
        this.showAbout = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kam\Documents\GitHub\parsen-homes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map