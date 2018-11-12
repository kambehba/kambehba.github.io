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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main\r\n{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows:(10px)[150];\r\n      grid-template-rows:repeat(150,10px);\r\n  -ms-grid-columns:(10px)[150];\r\n      grid-template-columns:repeat(150,10px);\r\n  \r\n}\r\n\r\n.logo\r\n{\r\n  -ms-grid-row:5;\r\n      grid-row-start:5;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:5;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:0;\r\n  grid-column-end:20;\r\n  border-bottom-style: solid;\r\n  border-color: chartreuse;\r\n}\r\n\r\n.title\r\n{\r\n  background-color:#6C6D69;\r\n  -ms-grid-row:5;\r\n      grid-row-start:5;\r\n  -ms-grid-row-span:15;\r\n  grid-row-end:20;\r\n  -ms-grid-column:35;\r\n      grid-column-start:35;\r\n  -ms-grid-column-span:115;\r\n  grid-column-end:150;\r\n  \r\n}\r\n\r\n.titleText\r\n{\r\n  \r\n  -ms-grid-row:7;\r\n  \r\n      grid-row-start:7;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:7;\r\n  -ms-grid-column:50;\r\n      grid-column-start:50;\r\n  -ms-grid-column-span:70;\r\n  grid-column-end:120;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: rgb(222, 248, 126);\r\n  font-size: xx-large;\r\n  \r\n}\r\n\r\n.titleDailyDataText\r\n{\r\n  -ms-grid-row:8;\r\n      grid-row-start:8;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:8;\r\n  -ms-grid-column:120;\r\n      grid-column-start:120;\r\n  -ms-grid-column-span:70;\r\n  grid-column-end:190;\r\n  font-weight: bold;\r\n  color: rgb(238, 245, 214)\r\n  \r\n}\r\n\r\n.titleImage\r\n{\r\n  opacity: .5;\r\n  -ms-grid-row:2;\r\n      grid-row-start:2;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:2;\r\n  -ms-grid-column:4;\r\n      grid-column-start:4;\r\n  -ms-grid-column-span:8;\r\n  grid-column-end:12;\r\n}\r\n\r\n.blank\r\n{\r\n  background-color: rgb(103, 90, 216);\r\n  \r\n \r\n}\r\n\r\n.sidebar\r\n{\r\n  background-color:#6C6D69;\r\n  -ms-grid-row:20;\r\n      grid-row-start:20;\r\n  -ms-grid-row-span:60;\r\n  grid-row-end:80;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:15;\r\n  grid-column-end:35;\r\n}\r\n\r\n.content\r\n{\r\n  background-color: rgb(112, 116, 105);\r\n  -ms-grid-row:20;\r\n      grid-row-start:20;\r\n  -ms-grid-row-span:60;\r\n  grid-row-end:80;\r\n  -ms-grid-column:35;\r\n      grid-column-start:35;\r\n  -ms-grid-column-span:115;\r\n  grid-column-end:150;\r\n}\r\n\r\n.footer\r\n{\r\n  background-color: rgb(164, 167, 158);\r\n  -ms-grid-row:80;\r\n      grid-row-start:80;\r\n  -ms-grid-row-span:3;\r\n  grid-row-end:83;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:130;\r\n  grid-column-end:150;\r\n}\r\n\r\n.homeButton\r\n{\r\n  -ms-grid-row:25;\r\n      grid-row-start:25;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:25;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:15;\r\n  grid-column-end:35;\r\n}\r\n\r\n.projectButton\r\n{\r\n  -ms-grid-row:35;\r\n      grid-row-start:35;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:35;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:15;\r\n  grid-column-end:35;\r\n\r\n  \r\n}\r\n\r\n.aboutButton\r\n{\r\n  -ms-grid-row:45;\r\n      grid-row-start:45;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:45;\r\n  -ms-grid-column:20;\r\n      grid-column-start:20;\r\n  -ms-grid-column-span:15;\r\n  grid-column-end:35;\r\n \r\n}\r\n\r\n.buttons\r\n{\r\n  background: rgba(75, 54, 45, 0.836);\r\n  border-radius: 25px;\r\n  border-color: rgb(177, 177, 206);\r\n  width: 120px;\r\n  height: 30px;\r\n  margin-left: 15px;\r\n  font-weight: bolder;\r\n  color: aliceblue;\r\n  \r\n}\r\n\r\n.projectImage\r\n{\r\n  -ms-grid-row:30;\r\n      grid-row-start:30;\r\n  -ms-grid-row-span:50;\r\n  grid-row-end:80;\r\n  -ms-grid-column:95;\r\n      grid-column-start:95;\r\n  -ms-grid-column-span:55;\r\n  grid-column-end:150;\r\n\r\n}\r\n\r\n.nextButton\r\n{\r\n  -ms-grid-row:70;\r\n      grid-row-start:70;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:70;\r\n  -ms-grid-column:110;\r\n      grid-column-start:110;\r\n  -ms-grid-column-span:40;\r\n  grid-column-end:150;\r\n}\r\n\r\n.previousButton\r\n{\r\n  -ms-grid-row:70;\r\n      grid-row-start:70;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:70;\r\n  -ms-grid-column:95;\r\n      grid-column-start:95;\r\n  -ms-grid-column-span:55;\r\n  grid-column-end:150;\r\n}\r\n\r\n.footerText\r\n{\r\n  -ms-grid-row:81;\r\n      grid-row-start:81;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:81;\r\n  -ms-grid-column:60;\r\n      grid-column-start:60;\r\n  -ms-grid-column-span:60;\r\n  grid-column-end:120;\r\n  font-size: small;\r\n  margin: auto;\r\n  width: 50%;\r\n}\r\n\r\n.homeText\r\n{\r\n  -ms-grid-row:20;\r\n      grid-row-start:20;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:20;\r\n  -ms-grid-column:40;\r\n      grid-column-start:40;\r\n  -ms-grid-column-span:110;\r\n  grid-column-end:150;\r\n\r\n  color: rgba(234, 238, 9, 0.808);\r\n  font-size: xx-large;\r\n  font-weight: bold;\r\n}\r\n\r\n.projectText\r\n{\r\n  font-family: 'Times New Roman', Times, serif;\r\n  color: rgb(219, 234, 248);\r\n  font-size: xx-large;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.aboutText\r\n{\r\n  -ms-grid-row:30;\r\n      grid-row-start:30;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:30;\r\n  -ms-grid-column:40;\r\n      grid-column-start:40;\r\n  -ms-grid-column-span:110;\r\n  grid-column-end:150;\r\n\r\n  color: rgba(234, 238, 9, 0.808);\r\n  font-size: xx-large;\r\n  font-weight: bold;\r\n  \r\n}\r\n\r\n.address\r\n{\r\n  -ms-grid-row:30;\r\n      grid-row-start:30;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:30;\r\n  -ms-grid-column:40;\r\n      grid-column-start:40;\r\n  -ms-grid-column-span:110;\r\n  grid-column-end:150;\r\n \r\n\r\n}\r\n\r\n.netOperatingIncome\r\n{\r\n  -ms-grid-row:40;\r\n      grid-row-start:40;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:40;\r\n  -ms-grid-column:72;\r\n      grid-column-start:72;\r\n  -ms-grid-column-span:78;\r\n  grid-column-end:150;\r\n  \r\n}\r\n\r\n.cashFlow\r\n{\r\n  -ms-grid-row:50;\r\n      grid-row-start:50;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:50;\r\n  -ms-grid-column:57;\r\n      grid-column-start:57;\r\n  -ms-grid-column-span:93;\r\n  grid-column-end:150;\r\n  \r\n}\r\n\r\n.label\r\n{\r\n  color: rgba(234, 238, 9, 0.808);\r\n  font-size: xx-large;\r\n  font-weight: bold;\r\n}\r\n\r\n.netOperatingIncomeLabel\r\n{\r\n  -ms-grid-row:40;\r\n      grid-row-start:40;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:40;\r\n  -ms-grid-column:40;\r\n      grid-column-start:40;\r\n  -ms-grid-column-span:110;\r\n  grid-column-end:150;\r\n}\r\n\r\n.cashFlowLabel\r\n{\r\n  -ms-grid-row:50;\r\n      grid-row-start:50;\r\n  -ms-grid-row-span:0;\r\n  grid-row-end:50;\r\n  -ms-grid-column:40;\r\n      grid-column-start:40;\r\n  -ms-grid-column-span:110;\r\n  grid-column-end:150;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n    <div class=\"logo\">\r\n            <img src=\"../assets/images/logo2.png\">\r\n           \r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        \r\n      \r\n\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"sidebar\">\r\n       \r\n\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n       \r\n\r\n    </div>\r\n\r\n\r\n    \r\n    <div class=\"footer\">\r\n         \r\n    </div>\r\n\r\n    <div class=\"footerText\">\r\n            PARSEN HOMES LLC - copy right 2018\r\n    </div>\r\n\r\n    \r\n    <div class=\"homeText\" *ngIf=\"showHome\">\r\n                <ul>\r\n                       <li>Property Management </li>\r\n                       <br>\r\n                       <li>Single Family Homes </li>\r\n                       <br>\r\n                       <li>Apartment Buildings</li>\r\n                       <br>\r\n                       <li>Notes</li>\r\n                 </ul>  \r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"aboutText\" *ngIf=\"showAbout\">\r\n                Since 2008, we've had the privilege of helping our investors to grow their money with proven business model.\r\n \r\n                We started with investing  in high end residential houses to generate cash flow for our investors and resling the property at the right time to exit and move on to the next investment. \r\n                 \r\n                We have houses in Indiana and Florida. We are expanding to other type of residential B or C class as well and will soon will expand to invest in apartment buildings. \r\n                \r\n    </div>\r\n\r\n    \r\n         \r\n    \r\n\r\n    <div class=\"titleDailyDataText\">\r\n           \r\n               <p>ORLANDO FL</p> \r\n               <p> {{date}} -  {{temperature}} degree F</p>           \r\n    </div>\r\n\r\n    <div class=\"titleText\">\r\n           <p> WELCOME TO PARSEN HOMES</p>\r\n    </div>\r\n      \r\n\r\n    <div class=\"homeButton\"> <button class=\"buttons\"  (click)=\"OnHomeClicked()\">Home</button></div>\r\n\r\n    <div class=\"projectButton\"> <button class=\"buttons\"  (click)=\"OnProjectsClicked()\">Projects</button></div>\r\n\r\n    <div class=\"aboutButton\"> <button class=\"buttons\"  (click)=\"OnAboutClicked()\">About</button></div>\r\n\r\n    <div class=\"projectImage\" *ngIf=\"showProjects\">\r\n           \r\n            <img class=\"i1\" src={{project.image}}>\r\n    </div>\r\n\r\n    <div class=\"nextButton\" *ngIf=\"showProjects\"> <button class=\"buttons\"  (click)=\"OnNextImageClick()\">next</button></div>\r\n    <div class=\"previousButton\" *ngIf=\"showProjects\"> <button class=\"buttons\"  (click)=\"OnPrevImageClick()\">prev</button></div>\r\n\r\n    <div class=\"projectText address\" *ngIf=\"showProjects\">\r\n            {{project.address}}\r\n\r\n    </div>\r\n\r\n    <div class=\"label netOperatingIncomeLabel\" *ngIf=\"showProjects\">\r\n                Net Opearting Income: \r\n    </div>\r\n\r\n    <div class=\"label cashFlowLabel\" *ngIf=\"showProjects\">\r\n                Cash Flow:\r\n    </div>\r\n\r\n    <div class=\"projectText netOperatingIncome\" *ngIf=\"showProjects\">\r\n           ${{project.netOperatingIncome}}\r\n\r\n    </div>\r\n\r\n    <div class=\"projectText cashFlow\" *ngIf=\"showProjects\">\r\n            ${{project.cashFlow}}\r\n\r\n    </div>\r\n\r\n\r\n   \r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/app/project.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AppComponent(http) {
        this.http = http;
        this.projects = [];
        this.activeProjectId = 1;
        this.showHome = true;
        this.showProjects = false;
        this.showAbout = false;
        console.log('Constructor initialised');
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var project = new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.project = { id: 1, address: "6148 Buck Trail rd Indianapolis IN", netOperatingIncome: "5400", cashFlow: "450", image: "../assets/images/i1.jpg" };
        this.projects.push(this.project);
        this.project = { id: 2, address: "16620 Milhousen Trail Rd Westfield IN", netOperatingIncome: "7800", cashFlow: "1550", image: "../assets/images/i2.jpg" };
        this.projects.push(this.project);
        this.project = { id: 3, address: "12839 Cypress Swamp dr Orlando FL", netOperatingIncome: "15000", cashFlow: "2800", image: "../assets/images/i3.jpg" };
        this.projects.push(this.project);
        this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=34787,us&appid=48c9253d856985a9b820967927888247').subscribe(function (data) {
            _this.temperature = data['main']['temp'];
            _this.temperature = Math.round((_this.temperature - 273.15) * 1.8 + 32);
        });
        this.http.get('http://worldtimeapi.org/api/timezone/America/New_York').subscribe(function (data) {
            console.log(data);
            //this.date = data['datetime'];
        });
        this.date = new Date().toDateString();
    };
    //kghhyjgfhjfhjfj
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
    AppComponent.prototype.OnNextImageClick = function () {
        if (this.activeProjectId < 3) {
            this.activeProjectId++;
        }
        //if(this.activeProjectId >= 3){this.activeProjectId = 1;}
        var activeId = this.activeProjectId;
        this.project = this.projects.find(function (element) { return element.id == activeId; });
        ;
    };
    AppComponent.prototype.OnPrevImageClick = function () {
        if (this.activeProjectId > 1) {
            this.activeProjectId--;
        }
        var activeId = this.activeProjectId;
        this.project = this.projects.find(function (element) { return element.id == activeId; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.id = 1;
        this.image = "";
        this.address = "";
        this.cashFlow = "";
        this.netOperatingIncome = "";
    }
    return Project;
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