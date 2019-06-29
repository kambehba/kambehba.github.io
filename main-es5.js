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

module.exports = "<div class=\"container\">\r\n\r\n    <aside>\r\n        <br>\r\n        <p class=\"date\">Today is {{currentDate}}\r\n            <br><br><span> Orlando Florida</span> <br><br>\r\n            <span> Temp: {{currentTemp}} F</span> </p>\r\n        <img class=\"myPhoto\" src=\"../assets/kamparsen.jpg\" alt=\"Italian Trulli\">\r\n        <nav class=\"nav\">\r\n            <button class=\"navBtn btn-success\" (click)=\"loadAbout()\">About</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadEducation()\">Education</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadExperience()\">Experience</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadSkills()\">Skills</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadInterests()\">Interests</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadContact()\">Contact</button>\r\n        </nav>\r\n    </aside>\r\n\r\n    <main>\r\n        <section class=\"main-area\">\r\n\r\n            <!-- about starts -->\r\n            <section class=\"about\" *ngIf=\"showAbout\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Kam\r\n                        <span class=\"text-success\">Parsen</span>\r\n                    </h1>\r\n                </header>\r\n                <article class=\"aboutText\">\r\n                    Thank you for visiting my site !<br/><br/>\r\n                    I am a problem solver who does Engineering not only \r\n                    to make a living but also for fun.<br/><br/>\r\n                    I started my carrier back in 1999 by falling in love with Automation and programming PLCs.<br/>\r\n                    Since then I have worked in veraity of projects from Embeded systems to Web Application.<br>\r\n                    \r\n                </article>\r\n            </section>\r\n            <!-- about ends -->\r\n\r\n            <!-- education starts -->\r\n            <section class=\"education\" *ngIf=\"showEducation\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Purdue\r\n                        <span class=\"text-success\">Univeristy</span>\r\n                    </h1>\r\n                </header>\r\n\r\n                <div class=\"educationGrid\">\r\n                    <button class=\"b b1 btn-success\" (click)=\"ShowBachelorDegree()\">Bachelor Degree</button>\r\n                    <button class=\"b b2 btn-warning\" (click)=\"ShowSeniorDesign()\">Senior Design</button>\r\n                    <button class=\"b b3 btn-danger\" (click)=\"ShowMasterDegree()\">Master Degree</button>\r\n                    <img class=\"img1\" src={{educationImage}}>\r\n\r\n                </div>\r\n            </section>\r\n            <!-- education ends -->\r\n\r\n\r\n            <!-- experince starts -->\r\n            <section class=\"experince\" *ngIf=\"showExperience\">\r\n                <button class=\"b b4 btn-success\" (click)=\"Show1999()\">1999-2002</button>\r\n                <button class=\"b b5 btn-info\" (click)=\"Show2002()\">2002-2004</button>\r\n                <button class=\"b b6 btn-warning\" (click)=\"Show2008()\">2008-2010</button>\r\n                <button class=\"b b7 btn-primary\" (click)=\"Show2010()\">2010-2013</button>\r\n                <button class=\"b b8 btn-danger\" (click)=\"Show2013()\">2013-2019</button>\r\n\r\n                <button *ngIf=\"show1999 || show2010 || show2013\" class=\"prevBtn btn-primary\"\r\n                    (click)=\"prevImage()\">Prev</button>\r\n                <button *ngIf=\"show1999 || show2010 || show2013\" class=\"nextBtn btn-primary\"\r\n                    (click)=\"nextImage()\">Next</button>\r\n\r\n\r\n\r\n                <img *ngIf=\"show1999\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show1999\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show1999\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show1999\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                <img *ngIf=\"show1999\" class=\"img2\" src={{camozziImage}}>\r\n\r\n                <img *ngIf=\"show2002\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2002\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2002\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2002\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n\r\n                <img *ngIf=\"show2008\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2008\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2008\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2008\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                <img *ngIf=\"show2008\" class=\"img2\" src={{raytheonImage}}>\r\n\r\n                <img *ngIf=\"show2010\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2010\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2010\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2010\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                <img *ngIf=\"show2010\" class=\"img2\" src=\"{{espnImage}}\">\r\n\r\n                <img *ngIf=\"show2013\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2013\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2013\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2013\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                <img *ngIf=\"show2013\" class=\"img2\" src={{novaImage}}>\r\n\r\n\r\n            </section>\r\n            <!-- experince ends -->\r\n\r\n            <!-- skills starts -->\r\n            <section class=\"skills\" *ngIf=\"showSkills\">\r\n                <button class=\"b b9 btn-primary\" (click)=\"ShowDesktopSkills()\">DESKTOP</button>\r\n                <button class=\"b b10 btn-danger\" (click)=\"ShowWebSkills()\">WEB</button>\r\n                <button class=\"b b11 btn-warning\" (click)=\"ShowFirmwareSkills()\">HARDWARE</button>\r\n\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Programming Languages: <span\r\n                            class=\"display-3 text-uppercase text-white\"> C , C++ , C# </span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Markup Languages: <span\r\n                            class=\"display-3 text-uppercase text-white\">XAML , XML</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Frameworks , Libraries: <span\r\n                            class=\"display-3 text-uppercase text-white\">.NET WPF , WCF , PRISM</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t4\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Design Patterns: <span\r\n                            class=\"display-3 text-uppercase text-white\">MVVM , Dependency Injection , Command</span>\r\n                    </h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Client Side: <span\r\n                            class=\"display-3 text-uppercase text-white\"> AngularJs , HTML , CSS , Bootstrap ,<br />\r\n                            Visual Studio Code</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Server Side: <span\r\n                            class=\"display-3 text-uppercase text-white\">NodeJS , Express ,RESTfull Services ,\r\n                            Javascript</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Database: <span\r\n                            class=\"display-3 text-uppercase text-white\">Mongo DB , Firebase Database</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">PLC: <span\r\n                            class=\"display-3 text-uppercase text-white\"> Allen Bradlley , Siemens S7 , Omron\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Microcontrollers: <span\r\n                            class=\"display-3 text-uppercase text-white\">  ESP8266 , Arduino ,PIC and Rasberry PI\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Fimware: <span\r\n                            class=\"display-3 text-uppercase text-white\"> C , and Assembely</span></h2>\r\n                </header>\r\n\r\n\r\n\r\n            </section>\r\n            <!-- skills ends -->\r\n\r\n\r\n\r\n\r\n\r\n        </section>\r\n        <!-- main area ends -->\r\n\r\n    </main>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/DateTimeModel.ts":
/*!**********************************!*\
  !*** ./src/app/DateTimeModel.ts ***!
  \**********************************/
/*! exports provided: DateTimeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return DateTimeModel; });
var DateTimeModel = /** @class */ (function () {
    function DateTimeModel() {
    }
    return DateTimeModel;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n *{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n  } \r\n\r\n.container{\r\n   \r\n    display: grid;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n} \r\n\r\naside{\r\n    display: grid;\r\n    grid-column: 1;\r\n    align-content: center;\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 300px;\r\n    background: #a8c0ff;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n} \r\n\r\n.date{\r\n    color: rgb(247, 243, 236);\r\n    align-content:center;\r\n    margin-bottom: 1rem;\r\n    margin-left: 1rem;\r\n    font-size: large;\r\n\r\n} \r\n\r\n.myPhoto{\r\n    width: 70%;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    border: 2px solid wheat;\r\n    box-shadow: 0 10px 20px rgb(54, 52, 52)\r\n} \r\n\r\n.nav{\r\n    display: grid;\r\n    justify-items: center;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.nav button{\r\n    font-size: 110%;\r\n    color: wheat;\r\n    margin-bottom: 1rem;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.nav button:hover{\r\n    text-decoration: none;\r\n    -webkit-transform: scale(1.4);\r\n            transform: scale(1.4);\r\n} \r\n\r\nmain{\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n   \r\n} \r\n\r\n.navBtn{\r\n    width: 100px;\r\n    height: 30px; \r\n} \r\n\r\n.main-area{\r\n    grid-column: 2/3;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);\r\n} \r\n\r\n.about{\r\n    display: grid;\r\n    align-content: center;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n\r\n} \r\n\r\n.aboutText{\r\n    margin: 2rem;\r\n    font-size: xx-large;\r\n    color: #ecedf0;\r\n    align-self: center;\r\n    width: 700px;\r\n} \r\n\r\n.education{\r\n    display: grid;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.educationGrid{\r\n    display: grid;\r\n    grid-template-columns: minmax(60px,200px) minmax(60px,200px) minmax(60px,200px);\r\n    grid-template-rows: 100px 600px 100px;\r\n    grid-template-areas: \r\n    \"b1 b2 b3\"\r\n    \"main main main\"\r\n    \"footer footer footer\";\r\n    grid-column-gap: 1rem;\r\n} \r\n\r\n.g1{\r\n    width: 400px;\r\n    grid-row: 2;\r\n    align-content: center;\r\n} \r\n\r\n.buttonrow{\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-row: 1;\r\n    \r\n} \r\n\r\n.b{\r\n    margin-top: 2rem;\r\n    height: 30px;\r\n   \r\n} \r\n\r\n.b1{\r\n    grid-area: b1;\r\n    margin-left: 1rem\r\n} \r\n\r\n.b2{\r\n    grid-area: b2;\r\n} \r\n\r\n.b3{\r\n    grid-area: b3;\r\n} \r\n\r\n.img1{\r\n   grid-area: main;\r\n   width: 100%;\r\n   height: auto;\r\n   margin-top: 1rem;\r\n   margin-left: 2rem;\r\n\r\n} \r\n\r\n.degreeInfo{\r\n    grid-area: ff;\r\n    width: 100%;\r\n    height: auto;\r\n} \r\n\r\n.experince{\r\n    display: grid;\r\n    margin-left: 2rem;\r\n    grid-template-columns: minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,auto) minmax(120px,auto);\r\n    grid-template-rows: minmax(40px,auto) minmax(40px,auto) minmax(40px,auto) minmax(40px,auto) 100px 200px minmax(auto,200px) minmax(auto,200px);\r\n    grid-template-areas: \r\n    \"b4 b5 b6 b7 b8 empty1\"\r\n    \"companyLogo company company company company company\"\r\n    \"companyLogo title title title title title\"\r\n    \"companyLogo role role role role role\"\r\n    \"companyLogo empty4 prevBtn nextBtn empty5 empty5\"\r\n    \"empty empty main main main main\"\r\n    \"footer footer main main main main\";\r\n  \r\n    grid-column-gap: 1rem;\r\n    height: 100vh;\r\n} \r\n\r\n.b4{\r\n    grid-area: b4;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.b5{\r\n    grid-area: b5;\r\n} \r\n\r\n.b6{\r\n    grid-area: b6;\r\n} \r\n\r\n.b7{\r\n    grid-area: b7;\r\n} \r\n\r\n.b8{\r\n    grid-area: b8;\r\n} \r\n\r\n.companyLogo{\r\n    grid-area: companyLogo;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 2rem;\r\n\r\n} \r\n\r\n.img2{\r\n    grid-area: main;\r\n   \r\n    border: rgb(226, 153, 17) solid 5px;\r\n    margin-top: 1rem;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n    width: 400px;\r\n    height: 337px;\r\n \r\n } \r\n\r\n.company{\r\n     grid-area: company;\r\n     color: rgb(240, 241, 245);\r\n     font-weight: bold;\r\n     width: 100%;\r\n     margin-left: 2rem;\r\n     margin-top: 2rem;\r\n   \r\n } \r\n\r\n.experince span{\r\n     color: rgb(41, 247, 34);\r\n } \r\n\r\n.title{\r\n    grid-area: title;\r\n    color: rgb(243, 243, 247);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n} \r\n\r\n.role{\r\n    grid-area: role;\r\n    color: rgb(249, 249, 250);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n} \r\n\r\n.nextBtn{\r\n    grid-area: nextBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 3rem;\r\n    margin-left: 2rem;\r\n    \r\n   \r\n} \r\n\r\n.prevBtn{\r\n    grid-area: prevBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 3rem;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.skills{\r\n    display: grid;\r\n    /* grid-template-columns: minmax(60px,100px) minmax(40px,100px) minmax(40px,100px) minmax(60px,100px) minmax(60px,1fr) minmax(120px,1fr); */\r\n    grid-template-columns: 30px 100px 100px 100px repeat(10,auto);\r\n    grid-template-rows: repeat(9,auto);\r\n    grid-template-areas: \r\n    \"e b9 b10 b11 e1 e1 e1 e1 e1 e1 e1 e1 e1 e1\"\r\n    \"t1 t1 t1 t1 t1 e2 e2 e2 e2 e2 e2 e2 e2 e2\"\r\n    \"t2 t2 t2 t2 t2 e4 e4 e4 e4 e4 e4 e4 e4 e4\"\r\n    \"t3 t3 t3 t3 t3 e6 e6 e6 e6 e6 e6 e6 e6 e6\"\r\n    \"t4 t4 t4 t4 t4 e8 e8 e8 e8 e8 e8 e8 e8 e8\";\r\n   \r\n   \r\n    height: 100vh;\r\n} \r\n\r\n.skills span{\r\n    font-size:xx-large;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b9:focus{\r\n    box-shadow: rgb(233, 224, 224);\r\n    \r\n} \r\n\r\n.b9:hover{\r\n    border: rgb(231, 222, 240) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b10{\r\n    grid-area: b10;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b10:focus{\r\n    box-shadow: rgb(238, 234, 234);\r\n    \r\n} \r\n\r\n.b10:hover{\r\n    border: rgb(238, 234, 241) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b11{\r\n    grid-area: b11;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b11:focus{\r\n    box-shadow: rgb(247, 245, 245);\r\n    \r\n} \r\n\r\n.b11:hover{\r\n    border: rgb(249, 246, 252) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.t1{\r\n    grid-area: t1;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t2{\r\n    grid-area: t2;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.t3{\r\n    grid-area: t3;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t4{\r\n    grid-area: t4;\r\n    margin-left: 2rem;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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c0NvbnRlbnQiOlsiXHJcbiAqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfSBcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmFzaWRle1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNhOGMwZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNmMmI5NiwgI2E4YzBmZik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2YyYjk2LCAjYThjMGZmKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxufVxyXG5cclxuLmRhdGV7XHJcbiAgICBjb2xvcjogcmdiKDI0NywgMjQzLCAyMzYpO1xyXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG5cclxufVxyXG5cclxuLm15UGhvdG97XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYig1NCwgNTIsIDUyKVxyXG59XHJcblxyXG4ubmF2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5uYXYgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNnM7XHJcbn1cclxuXHJcbi5uYXYgYnV0dG9uOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG59XHJcblxyXG5tYWlue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xyXG4gICBcclxufVxyXG5cclxuLm5hdkJ0bntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDsgXHJcbn1cclxuXHJcbi5tYWluLWFyZWF7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIwZGVnLCAjMmI1ODc2IDAlLCAjNGU0Mzc2IDEwMCUpO1xyXG59XHJcblxyXG4uYWJvdXR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxufVxyXG5cclxuLmFib3V0VGV4dHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogI2VjZWRmMDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLmVkdWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5lZHVjYXRpb25Hcmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCg2MHB4LDIwMHB4KSBtaW5tYXgoNjBweCwyMDBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDYwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImIxIGIyIGIzXCJcclxuICAgIFwibWFpbiBtYWluIG1haW5cIlxyXG4gICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZzF7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnJvd3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBcclxufVxyXG5cclxuLmJ7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICBcclxufVxyXG5cclxuLmIxe1xyXG4gICAgZ3JpZC1hcmVhOiBiMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXHJcbn1cclxuXHJcbi5iMntcclxuICAgIGdyaWQtYXJlYTogYjI7XHJcbn1cclxuXHJcbi5iM3tcclxuICAgIGdyaWQtYXJlYTogYjM7XHJcbn1cclxuXHJcbi5pbWcxe1xyXG4gICBncmlkLWFyZWE6IG1haW47XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uZGVncmVlSW5mb3tcclxuICAgIGdyaWQtYXJlYTogZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmV4cGVyaW5jZXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLDEwMHB4KSBtaW5tYXgoYXV0bywxMDBweCkgbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLGF1dG8pIG1pbm1heCgxMjBweCxhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgMTAwcHggMjAwcHggbWlubWF4KGF1dG8sMjAwcHgpIG1pbm1heChhdXRvLDIwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJiNCBiNSBiNiBiNyBiOCBlbXB0eTFcIlxyXG4gICAgXCJjb21wYW55TG9nbyBjb21wYW55IGNvbXBhbnkgY29tcGFueSBjb21wYW55IGNvbXBhbnlcIlxyXG4gICAgXCJjb21wYW55TG9nbyB0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIHJvbGUgcm9sZSByb2xlIHJvbGUgcm9sZVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIGVtcHR5NCBwcmV2QnRuIG5leHRCdG4gZW1wdHk1IGVtcHR5NVwiXHJcbiAgICBcImVtcHR5IGVtcHR5IG1haW4gbWFpbiBtYWluIG1haW5cIlxyXG4gICAgXCJmb290ZXIgZm9vdGVyIG1haW4gbWFpbiBtYWluIG1haW5cIjtcclxuICBcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5iNHtcclxuICAgIGdyaWQtYXJlYTogYjQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmI1e1xyXG4gICAgZ3JpZC1hcmVhOiBiNTtcclxufVxyXG5cclxuLmI2e1xyXG4gICAgZ3JpZC1hcmVhOiBiNjtcclxufVxyXG5cclxuLmI3e1xyXG4gICAgZ3JpZC1hcmVhOiBiNztcclxufVxyXG5cclxuLmI4e1xyXG4gICAgZ3JpZC1hcmVhOiBiODtcclxufVxyXG5cclxuLmNvbXBhbnlMb2dve1xyXG4gICAgZ3JpZC1hcmVhOiBjb21wYW55TG9nbztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gICBcclxuICAgIGJvcmRlcjogcmdiKDIyNiwgMTUzLCAxNykgc29saWQgNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMzN3B4O1xyXG4gXHJcbiB9XHJcblxyXG4gLmNvbXBhbnl7XHJcbiAgICAgZ3JpZC1hcmVhOiBjb21wYW55O1xyXG4gICAgIGNvbG9yOiByZ2IoMjQwLCAyNDEsIDI0NSk7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgXHJcbiB9XHJcblxyXG4gXHJcblxyXG4gLmV4cGVyaW5jZSBzcGFue1xyXG4gICAgIGNvbG9yOiByZ2IoNDEsIDI0NywgMzQpO1xyXG4gfVxyXG5cclxuIC50aXRsZXtcclxuICAgIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgMjQzLCAyNDcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgIFxyXG59XHJcblxyXG4ucm9sZXtcclxuICAgIGdyaWQtYXJlYTogcm9sZTtcclxuICAgIGNvbG9yOiByZ2IoMjQ5LCAyNDksIDI1MCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgXHJcbn1cclxuXHJcbi5uZXh0QnRue1xyXG4gICAgZ3JpZC1hcmVhOiBuZXh0QnRuO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4ucHJldkJ0bntcclxuICAgIGdyaWQtYXJlYTogcHJldkJ0bjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnNraWxsc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHB4LDEwMHB4KSBtaW5tYXgoNDBweCwxMDBweCkgbWlubWF4KDQwcHgsMTAwcHgpIG1pbm1heCg2MHB4LDEwMHB4KSBtaW5tYXgoNjBweCwxZnIpIG1pbm1heCgxMjBweCwxZnIpOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDEwMHB4IDEwMHB4IDEwMHB4IHJlcGVhdCgxMCxhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiZSBiOSBiMTAgYjExIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxXCJcclxuICAgIFwidDEgdDEgdDEgdDEgdDEgZTIgZTIgZTIgZTIgZTIgZTIgZTIgZTIgZTJcIlxyXG4gICAgXCJ0MiB0MiB0MiB0MiB0MiBlNCBlNCBlNCBlNCBlNCBlNCBlNCBlNCBlNFwiXHJcbiAgICBcInQzIHQzIHQzIHQzIHQzIGU2IGU2IGU2IGU2IGU2IGU2IGU2IGU2IGU2XCJcclxuICAgIFwidDQgdDQgdDQgdDQgdDQgZTggZTggZTggZTggZTggZTggZTggZTggZThcIjtcclxuICAgXHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNraWxscyBzcGFue1xyXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xyXG59XHJcblxyXG4uYjl7XHJcbiAgICBncmlkLWFyZWE6IGI5O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmI5OmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDIzMywgMjI0LCAyMjQpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5iOTpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDIzMSwgMjIyLCAyNDApIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi5iMTB7XHJcbiAgICBncmlkLWFyZWE6IGIxMDtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNnM7XHJcbn1cclxuXHJcbi5iMTA6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjM4LCAyMzQsIDIzNCk7XHJcbiAgICBcclxufVxyXG5cclxuLmIxMDpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDIzOCwgMjM0LCAyNDEpIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi5iMTF7XHJcbiAgICBncmlkLWFyZWE6IGIxMTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNnM7XHJcbn1cclxuXHJcbi5iMTE6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjQ3LCAyNDUsIDI0NSk7XHJcbiAgICBcclxufVxyXG5cclxuLmIxMTpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDI0OSwgMjQ2LCAyNTIpIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi50MXtcclxuICAgIGdyaWQtYXJlYTogdDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgXHJcbn1cclxuXHJcbi50MntcclxuICAgIGdyaWQtYXJlYTogdDI7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBcclxufVxyXG5cclxuLnQze1xyXG4gICAgZ3JpZC1hcmVhOiB0MztcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBcclxufVxyXG5cclxuLnQ0e1xyXG4gICAgZ3JpZC1hcmVhOiB0NDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siteService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteService */ "./src/app/siteService.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(siteService) {
        this.siteService = siteService;
        this.title = 'kamparsen-site';
        this.camoziImages = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG"];
        this.espnImages = ["../assets/i11.png", "../assets/i12.png"];
        this.novaImages = ["../assets/1.jpg", "../assets/2.jpg", "../assets/3.jpg"];
        this.allMonth = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.siteService.GetDateTimeInfo();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDate = new Date().toDateString();
        this.siteService.GetWeatherInfo();
        this.hideAllSkills();
        this.hideAllExperinces();
        this.currentCamozziImageIndex = 0;
        this.currentEspnImageIndex = 0;
        this.currentNovaImageIndex = 0;
        this.siteService.weatherModel.subscribe(function (weatherData) {
            _this.currentTemp = Math.floor(_this.ConvertKelvinToFarenhite(weatherData.main.temp));
        });
        this.loadAbout();
    };
    AppComponent.prototype.ConvertKelvinToFarenhite = function (params) {
        return (params - 273.15) * 1.8 + 32;
    };
    AppComponent.prototype.ShowBachelorDegree = function () { this.educationImage = "../assets/i2.JPG"; };
    AppComponent.prototype.ShowSeniorDesign = function () { this.educationImage = "../assets/i3.JPG"; };
    AppComponent.prototype.ShowMasterDegree = function () { this.educationImage = "../assets/i1.JPG"; };
    AppComponent.prototype.Show1999 = function () {
        this.hideAllExperinces();
        this.show1999 = true;
        this.company = "CAMOZZI , Pneumatic and Automation";
        this.companyLogo = "../assets/companyLogo.png";
        this.jobtitle = "Electrical and Automation  Engineer";
        this.responsibalities = "Electrical Panel design , PLC programming , Robotics and Automation.";
        this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
    };
    AppComponent.prototype.Show2002 = function () {
        this.hideAllExperinces();
        this.show2002 = true;
        this.company = "Honeywell";
        this.companyLogo = "../assets/honeywellLogo.png";
        this.jobtitle = "Electrical , BMS, BAS  Engineer";
        this.responsibalities = "Smart Building design for HVAC systems. ";
    };
    AppComponent.prototype.Show2008 = function () {
        this.hideAllExperinces();
        this.show2008 = true;
        this.raytheonImage = "../assets/i10.JPG";
        this.company = "Raytheon";
        this.companyLogo = "../assets/raytheonLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    };
    AppComponent.prototype.Show2010 = function () {
        this.hideAllExperinces();
        this.show2010 = true;
        this.espnImage = this.espnImages[this.currentEspnImageIndex];
        alert(this.espnImage);
        this.company = "ESPN";
        this.companyLogo = "../assets/espnLogo.png";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    };
    AppComponent.prototype.Show2013 = function () {
        this.hideAllExperinces();
        this.show2013 = true;
        this.novaImage = this.novaImages[this.currentNovaImageIndex];
        this.company = "Nova Techhologies";
        this.companyLogo = "../assets/novaLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";
    };
    AppComponent.prototype.prevImage = function () {
        if (this.show1999) {
            this.currentCamozziImageIndex--;
            if (this.currentCamozziImageIndex <= 0)
                this.currentCamozziImageIndex = 5;
            this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
        }
        if (this.show2010) {
            this.currentEspnImageIndex--;
            if (this.currentEspnImageIndex <= 0)
                this.currentEspnImageIndex = 1;
            this.espnImage = this.espnImages[this.currentEspnImageIndex];
        }
        if (this.show2013) {
            this.currentNovaImageIndex--;
            if (this.currentNovaImageIndex <= 0)
                this.currentNovaImageIndex = 1;
            this.novaImage = this.novaImages[this.currentNovaImageIndex];
        }
    };
    AppComponent.prototype.nextImage = function () {
        if (this.show1999) {
            this.currentCamozziImageIndex++;
            if (this.currentCamozziImageIndex > 5)
                this.currentCamozziImageIndex = 0;
            this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
        }
        if (this.show2010) {
            this.currentEspnImageIndex++;
            if (this.currentEspnImageIndex > 1)
                this.currentEspnImageIndex = 0;
            this.espnImage = this.espnImages[this.currentEspnImageIndex];
        }
        //kj
        if (this.show2013) {
            this.currentNovaImageIndex++;
            if (this.currentNovaImageIndex > 2)
                this.currentNovaImageIndex = 0;
            this.novaImage = this.novaImages[this.currentNovaImageIndex];
        }
    };
    AppComponent.prototype.loadAbout = function () {
        this.hideAllSections();
        this.showAbout = true;
    };
    AppComponent.prototype.loadEducation = function () {
        this.hideAllSections();
        this.showEducation = true;
    };
    AppComponent.prototype.loadExperience = function () {
        this.hideAllSections();
        this.showExperience = true;
    };
    AppComponent.prototype.loadSkills = function () {
        this.hideAllSections();
        this.hideAllExperinces();
        this.hideAllSkills();
        this.showSkills = true;
        this.showDesktopSkills = true;
    };
    AppComponent.prototype.loadInterests = function () {
        this.hideAllSections();
        this.showInterests = true;
    };
    AppComponent.prototype.loadContact = function () {
        this.hideAllSections();
        this.showContact = true;
    };
    AppComponent.prototype.hideAllSections = function () {
        this.showAbout = false;
        this.showEducation = false;
        this.showExperience = false;
        this.showSkills = false;
        this.showInterests = false;
        this.showContact = false;
    };
    AppComponent.prototype.hideAllExperinces = function () {
        this.show1999 = false;
        this.show2002 = false;
        this.show2008 = false;
        this.show2010 = false;
    };
    AppComponent.prototype.hideAllSkills = function () {
        this.showDesktopSkills = false;
        this.showWebSkills = false;
        this.showFirmwareSkills = false;
    };
    AppComponent.prototype.ShowDesktopSkills = function () {
        this.hideAllSkills();
        this.showDesktopSkills = true;
    };
    AppComponent.prototype.ShowWebSkills = function () {
        this.hideAllSkills();
        this.showWebSkills = true;
    };
    AppComponent.prototype.ShowFirmwareSkills = function () {
        this.hideAllSkills();
        this.showFirmwareSkills = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_siteService__WEBPACK_IMPORTED_MODULE_2__["SiteService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _DateTimeModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateTimeModel */ "./src/app/DateTimeModel.ts");
/* harmony import */ var _siteService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./siteService */ "./src/app/siteService.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_siteService__WEBPACK_IMPORTED_MODULE_6__["SiteService"], _DateTimeModel__WEBPACK_IMPORTED_MODULE_5__["DateTimeModel"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/siteService.ts":
/*!********************************!*\
  !*** ./src/app/siteService.ts ***!
  \********************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SiteService = /** @class */ (function () {
    function SiteService(http) {
        this.http = http;
        this.timeDateModel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.weatherModel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SiteService.prototype.GetDateTimeInfo = function () {
        // this.http.get<DateTimeModel>('http://worldclockapi.com/api/json/est/now').subscribe(
        //     data=>{this.timeDateModel.next(data);
        //     console.log(data.currentDateTime);
        //     });
        var _this = this;
        this.http.get('https://timezonedb.p.rapidapi.com/?zone=America%2FLos_Angeles&time=1358474681&lat=34.048108&lng=-118.244705&format=xml').subscribe(function (data) {
            _this.timeDateModel.next(data);
            console.log(data.currentDateTime);
        });
    };
    SiteService.prototype.GetWeatherInfo = function () {
        var _this = this;
        this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=34787,us&APPID=48c9253d856985a9b820967927888247').subscribe(function (data) {
            _this.weatherModel.next(data);
            console.log(data.main.temp);
        });
    };
    SiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SiteService);
    return SiteService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kam\Documents\GitHub\kamparsen-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map