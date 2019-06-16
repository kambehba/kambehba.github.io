(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <header class=\"header\">Welcome To Kam Internet Power Control</header>\r\n\r\n  <div class=\"mainbox\">\r\n\r\n    <label class=\"i1\">  Output-1: </label>\r\n    <span [ngStyle]=\"{'background-color': output1 === true ? 'chartreuse' : 'red'}\" class=\"i2\"></span>\r\n    <button class=\"i3\" (click)=\"OnClick1()\">ON</button>\r\n    <button class=\"i4\" (click)=\"OffClick1()\">OFF</button>\r\n\r\n    <label class=\"i5\">  Output-2: </label>\r\n    <span [ngStyle]=\"{'background-color': output2 === true ? 'chartreuse' : 'red'}\" class=\"i6\"></span>\r\n    <button class=\"i7\" (click)=\"OnClick2()\">ON</button>\r\n    <button class=\"i8\" (click)=\"OffClick2()\">OFF</button>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/OutputsService.ts":
/*!***********************************!*\
  !*** ./src/app/OutputsService.ts ***!
  \***********************************/
/*! exports provided: OutputsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsService", function() { return OutputsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");





let OutputsService = class OutputsService {
    constructor(http) {
        //this.output = new Output('','OFF')  
        this.http = http;
        //private outputs:Output[]; 
        //private output:Output;
        this.qq = [];
    }
    getOutputs() {
        this.outputs = this.http.get('http://localhost:3000/api/outputs');
    }
    updateOutput(payload) {
        this.http.post('http://localhost:3000/api/outputs', payload);
    }
};
OutputsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OutputsService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: grid;\r\n    grid-template-columns: repeat(20,1fr);\r\n    grid-template-rows: repeat(50,1fr);\r\n    background-color: black;\r\n    margin: 5%;\r\n    border-radius: 15px;\r\n}\r\n\r\n.header\r\n{\r\n    grid-column: 6/14;\r\n    grid-row: 3;\r\n    color: aliceblue;\r\n    font-size: xx-large;\r\n}\r\n\r\n.mainbox\r\n{\r\n    display: grid;\r\n    grid-column: 5/15 ;\r\n    grid-row: 4/12;\r\n    background-color: rgb(35, 101, 155);\r\n    border-style: double;\r\n    border-color: chartreuse;\r\n    border-radius: 25px;\r\n    grid-template-columns: repeat(10,1fr);\r\n    grid-template-rows: repeat(10,1fr);\r\n    \r\n}\r\n\r\n.i1\r\n{\r\n    grid-column: 3/5;\r\n    grid-row: 2;\r\n    margin-top: 5px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n    color: rgb(235, 227, 219);\r\n    margin: 3px;\r\n    align-self: center;\r\n\r\n}\r\n\r\n.i2\r\n{\r\n    grid-column: 5;\r\n    grid-row: 2;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color:chartreuse;\r\n    border-radius: 50%;\r\n    border-style: groove;\r\n    margin: 3px;\r\n    \r\n\r\n}\r\n\r\n.i3\r\n{\r\n    grid-column: 6;\r\n    grid-row: 2;\r\n    margin: 3px;\r\n    background-color: chartreuse;\r\n}\r\n\r\n.i4\r\n{\r\n    grid-column: 7;\r\n    grid-row: 2;\r\n    margin: 3px;\r\n    background-color: red;\r\n}\r\n\r\n.i5\r\n{\r\n    grid-column: 3/5;\r\n    grid-row: 4;\r\n    margin-top: 5px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n    color: rgb(235, 227, 219);\r\n    margin: 3px;\r\n    align-self: center;\r\n\r\n}\r\n\r\n.i6\r\n{\r\n    grid-column: 5;\r\n    grid-row: 4;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color:chartreuse;\r\n    border-radius: 50%;\r\n    border-style: groove;\r\n    margin: 3px;\r\n    \r\n\r\n}\r\n\r\n.i7\r\n{\r\n    grid-column: 6;\r\n    grid-row: 4;\r\n    margin: 2px;\r\n    background-color: chartreuse;\r\n    margin: 3px;\r\n}\r\n\r\n.i8\r\n{\r\n    grid-column: 7;\r\n    grid-row: 4;\r\n    margin: 2px;\r\n    background-color: red;\r\n    margin: 3px;\r\n}\r\n\r\n.ison\r\n{\r\n    background-color: chartreuse;\r\n\r\n}\r\n\r\n.isoff\r\n{\r\n    background-color:orangered;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxrQ0FBa0M7O0FBRXRDOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXOzs7QUFHZjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXOzs7QUFHZjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksNEJBQTRCOztBQUVoQzs7QUFFQTs7SUFFSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjAsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyXHJcbntcclxuICAgIGdyaWQtY29sdW1uOiA2LzE0O1xyXG4gICAgZ3JpZC1yb3c6IDM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLm1haW5ib3hcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uOiA1LzE1IDtcclxuICAgIGdyaWQtcm93OiA0LzEyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDEsIDE1NSk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICAgIGJvcmRlci1jb2xvcjogY2hhcnRyZXVzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcclxuICAgIFxyXG59XHJcblxyXG4uaTFcclxue1xyXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIyNywgMjE5KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmkyXHJcbntcclxuICAgIGdyaWQtY29sdW1uOiA1O1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5pM1xyXG57XHJcbiAgICBncmlkLWNvbHVtbjogNjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG59XHJcblxyXG4uaTRcclxue1xyXG4gICAgZ3JpZC1jb2x1bW46IDc7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaTVcclxue1xyXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcclxuICAgIGdyaWQtcm93OiA0O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIyNywgMjE5KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmk2XHJcbntcclxuICAgIGdyaWQtY29sdW1uOiA1O1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5pN1xyXG57XHJcbiAgICBncmlkLWNvbHVtbjogNjtcclxuICAgIGdyaWQtcm93OiA0O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi5pOFxyXG57XHJcbiAgICBncmlkLWNvbHVtbjogNztcclxuICAgIGdyaWQtcm93OiA0O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLmlzb25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuXHJcbn1cclxuXHJcbi5pc29mZlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZXJlZDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _OutputsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutputsService */ "./src/app/OutputsService.ts");



let AppComponent = class AppComponent {
    constructor(outputsService) {
        // var dd = this.ts.getOutput();
        // console.log("*************"+dd);
        this.outputsService = outputsService;
        this.title = 'KAM Internet Power Control';
        this.output1 = false;
        this.output2 = false;
    }
    OnClick1() {
        this.output1 = true;
        this.output.Id = 1;
        this.output.Status = "ON";
        this.output.name = "sdfs";
        this.outputsService.updateOutput(this.output);
    }
    OffClick1() {
        this.output1 = false;
    }
    OnClick2() {
        this.output2 = true;
    }
    OffClick2() {
        this.output2 = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_OutputsService__WEBPACK_IMPORTED_MODULE_2__["OutputsService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kam\Documents\GitHub\IPC2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map