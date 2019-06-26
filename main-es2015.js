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

module.exports = "<div class=\"container\">\r\n\r\n    <aside>\r\n        <br>\r\n        <p class=\"date\">Today is {{currentWeekDay}}, {{currentMonth}}-{{currentDay}}, {{currentYear}}\r\n            <br><br><span> Orlando Florida</span> <br><br>\r\n            <span> Temp: {{currentTemp}} F</span> </p>\r\n        <img class=\"myPhoto\" src=\"../assets/kamparsen.jpg\" alt=\"Italian Trulli\">\r\n        <nav class=\"nav\">\r\n            <button class=\"navBtn btn-success\" (click)=\"loadAbout()\">About</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadEducation()\">Education</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadExperience()\">Experience</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadSkills()\">Skills</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadInterests()\">Interests</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadContact()\">Contact</button>\r\n        </nav>\r\n    </aside>\r\n\r\n    <main>\r\n        <section class=\"main-area\">\r\n\r\n            <!-- about starts -->\r\n            <section class=\"about\" *ngIf=\"showAbout\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Kam\r\n                        <span class=\"text-success\">Parsen</span>\r\n                    </h1>\r\n                </header>\r\n                <article class=\"aboutText text-muted\">\r\n                    I live in beautiful city of Orlando in sunshine state.<br>\r\n                    I am married to a wonderful woman and we have two boys together.<br>\r\n                    I have been doing Electrical, Electronic, Firmware and Software Engineering for two decades.<br>\r\n                    I have worked on vast variety of projects from factory Automation with PLCs to Web Application\r\n                    written with AngualrJS .<br>\r\n                    Software and Embedded systems are more than a job to me . I also do this on my spear time as a\r\n                    hoppey.\r\n\r\n                </article>\r\n            </section>\r\n            <!-- about ends -->\r\n            \r\n            <!-- education starts -->\r\n            <section class=\"education\" *ngIf=\"showEducation\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Purdue\r\n                        <span class=\"text-success\">Univeristy</span>\r\n                    </h1>\r\n                </header>\r\n\r\n                <div class=\"educationGrid\">\r\n                    <button class=\"b b1 btn-success\" (click)=\"ShowBachelorDegree()\">Bachelor Degree</button>\r\n                    <button class=\"b b2 btn-warning\" (click)=\"ShowSeniorDesign()\">Senior Design</button>\r\n                    <button class=\"b b3 btn-danger\" (click)=\"ShowMasterDegree()\">Master Degree</button>\r\n                    <img class=\"img1\" src={{educationImage}}>\r\n                   \r\n                </div>\r\n            </section>\r\n            <!-- education ends -->\r\n\r\n\r\n            <!-- experince starts -->\r\n            <section class=\"experince\" *ngIf=\"showExperience\">\r\n                    <button class=\"b b4 btn-success\" (click)=\"Show1999()\">1999-2002</button>\r\n                    <button class=\"b b5 btn-info\" (click)=\"Show2002()\">2002-2004</button>\r\n                    <button class=\"b b6 btn-warning\" (click)=\"Show2008()\">2008-2010</button>\r\n                    <button class=\"b b7 btn-primary\" (click)=\"Show2010()\">2010-2013</button>\r\n                    <button class=\"b b8 btn-danger\" (click)=\"Show2013()\">2013-2019</button>\r\n\r\n                    <button *ngIf=\"show1999\" class=\"prevBtn btn-primary\" (click)=\"prevImage()\">Prev</button>\r\n                    <button *ngIf=\"show1999\" class=\"nextBtn btn-primary\" (click)=\"nextImage()\">Next</button>\r\n                  \r\n                  \r\n                    <img *ngIf=\"show1999\" class=\"companyLogo\" src={{companyLogo}}>\r\n                    <div *ngIf=\"show1999\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                    <div *ngIf=\"show1999\" class=\"title\" >Title: <span>{{jobtitle}}</span> </div>\r\n                    <div *ngIf=\"show1999\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                    <img *ngIf=\"show1999\" class=\"img2\" src={{camozziImage}}>\r\n\r\n                    <img *ngIf=\"show2002\" class=\"companyLogo\" src={{companyLogo}}>\r\n                    <div *ngIf=\"show2002\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                    <div *ngIf=\"show2002\" class=\"title\" >Title: <span>{{jobtitle}}</span> </div>\r\n                    <div *ngIf=\"show2002\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n\r\n                    <img *ngIf=\"show2008\" class=\"companyLogo\" src={{companyLogo}}>\r\n                    <div *ngIf=\"show2008\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                    <div *ngIf=\"show2008\" class=\"title\" >Title: <span>{{jobtitle}}</span> </div>\r\n                    <div *ngIf=\"show2008\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n\r\n                    <img *ngIf=\"show2010\" class=\"companyLogo\" src={{companyLogo}}>\r\n                    <div *ngIf=\"show2010\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                    <div *ngIf=\"show2010\" class=\"title\" >Title: <span>{{jobtitle}}</span> </div>\r\n                    <div *ngIf=\"show2010\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n\r\n                    <img *ngIf=\"show2013\" class=\"companyLogo\" src={{companyLogo}}>\r\n                    <div *ngIf=\"show2013\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                    <div *ngIf=\"show2013\" class=\"title\" >Title: <span>{{jobtitle}}</span> </div>\r\n                    <div *ngIf=\"show2013\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                   \r\n\r\n            </section>\r\n            <!-- experince ends -->\r\n\r\n             <!-- skills starts -->\r\n             <section class=\"skills\" *ngIf=\"showSkills\">\r\n                    <button class=\"b b9 btn-primary\" (click)=\"ShowDesktopSkills()\">DESKTOP</button>\r\n                    <button class=\"b b10 btn-danger\" (click)=\"ShowWebSkills()\">WEB</button>\r\n                    <button class=\"b b11 btn-warning\" (click)=\"ShowFirmwareSkills()\">HARDWARE</button>\r\n\r\n                    <header *ngIf=\"showDesktopSkills\" class=\"t1\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Programing\r\n                            <span class=\"text-success\">Languages:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill1\">C</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill2\">C++</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill3\">C#</h3>\r\n\r\n                    <header *ngIf=\"showDesktopSkills\" class=\"t2\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Markup\r\n                            <span class=\"text-success\">Languages:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill4\">XAML</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill5\">XML</h3>\r\n\r\n                    <header *ngIf=\"showDesktopSkills\" class=\"t3\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Frameworks\r\n                            <span class=\"text-success\">Libraries:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill6\">WPF</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill7\">WCF</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill8\">PRISM</h3>\r\n\r\n                    <header *ngIf=\"showDesktopSkills\" class=\"t4\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Design\r\n                            <span class=\"text-success\">Patterns:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill9\">MVVM</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill10\">Dependency<br> Injection</h3>\r\n                    <h3 *ngIf=\"showDesktopSkills\" class=\"display-5 text-uppercase text-white desktopSkill11\">Command</h3>\r\n\r\n                    <header *ngIf=\"showWebSkills\" class=\"t1\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Programing\r\n                            <span class=\"text-success\">Languages:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showWebSkills\" class=\"display-5 text-uppercase text-white desktopSkill1\">Java Script ,  Phyton</h3>\r\n\r\n                    <header *ngIf=\"showWebSkills\" class=\"t2\">\r\n                        <h1 class=\"display-5 text-uppercase text-danger\">Markup-\r\n                            <span class=\"text-success\">Data Structuer:</span>\r\n                        </h1>\r\n                    </header>\r\n                    <h3 *ngIf=\"showWebSkills\" class=\"display-5 text-uppercase text-white desktopSkill4\">HTML , JSON </h3>\r\n                   \r\n\r\n            </section>\r\n            <!-- skills ends -->\r\n\r\n\r\n\r\n\r\n\r\n        </section>\r\n        <!-- main area ends -->\r\n\r\n    </main>\r\n\r\n\r\n\r\n</div>"

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
class DateTimeModel {
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n *{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n  } \r\n\r\n.container{\r\n   \r\n    display: grid;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n} \r\n\r\naside{\r\n    display: grid;\r\n    grid-column: 1;\r\n    align-content: center;\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 300px;\r\n    background: #a8c0ff;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n} \r\n\r\n.date{\r\n    color: rgb(247, 243, 236);\r\n    align-content:center;\r\n    margin-bottom: 1rem;\r\n    margin-left: 1rem;\r\n    font-size: large;\r\n\r\n} \r\n\r\n.myPhoto{\r\n    width: 70%;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    border: 2px solid wheat;\r\n    box-shadow: 0 10px 20px rgb(54, 52, 52)\r\n} \r\n\r\n.nav{\r\n    display: grid;\r\n    justify-items: center;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.nav button{\r\n    font-size: 110%;\r\n    color: wheat;\r\n    margin-bottom: 1rem;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.nav button:hover{\r\n    text-decoration: none;\r\n    -webkit-transform: scale(1.4);\r\n            transform: scale(1.4);\r\n} \r\n\r\nmain{\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n   \r\n} \r\n\r\n.navBtn{\r\n    width: 100px;\r\n    height: 30px;\r\n} \r\n\r\n.main-area{\r\n    grid-column: 2/3;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);\r\n} \r\n\r\n.about{\r\n    display: grid;\r\n    align-content: center;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n\r\n} \r\n\r\n.aboutText{\r\n    margin: 2rem;\r\n    font-weight: bold;\r\n    \r\n} \r\n\r\n.education{\r\n    display: grid;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.educationGrid{\r\n    display: grid;\r\n    grid-template-columns: minmax(60px,200px) minmax(60px,200px) minmax(60px,200px);\r\n    grid-template-rows: 100px 600px 100px;\r\n    grid-template-areas: \r\n    \"b1 b2 b3\"\r\n    \"main main main\"\r\n    \"footer footer footer\";\r\n    grid-column-gap: 1rem;\r\n} \r\n\r\n.g1{\r\n    width: 400px;\r\n    grid-row: 2;\r\n    align-content: center;\r\n} \r\n\r\n.buttonrow{\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-row: 1;\r\n    \r\n} \r\n\r\n.b{\r\n    margin-top: 2rem;\r\n    height: 30px;\r\n   \r\n} \r\n\r\n.b1{\r\n    grid-area: b1;\r\n    margin-left: 1rem\r\n} \r\n\r\n.b2{\r\n    grid-area: b2;\r\n} \r\n\r\n.b3{\r\n    grid-area: b3;\r\n} \r\n\r\n.img1{\r\n   grid-area: main;\r\n   width: 100%;\r\n   height: auto;\r\n   margin-top: 1rem;\r\n   margin-left: 2rem;\r\n\r\n} \r\n\r\n.degreeInfo{\r\n    grid-area: ff;\r\n    width: 100%;\r\n    height: auto;\r\n} \r\n\r\n.experince{\r\n    display: grid;\r\n    margin-left: 2rem;\r\n    grid-template-columns: minmax(60px,200px) minmax(60px,200px) minmax(60px,200px) minmax(60px,200px) minmax(60px,200px) minmax(120px,200px);\r\n    grid-template-rows: 80px 40px 40px 40px 100px 40px 700px 100px;\r\n    grid-template-areas: \r\n    \"b4 b5 b6 b7 b8 empty1\"\r\n    \"companyLogo company company company company company\"\r\n    \"companyLogo title title title title title\"\r\n    \"companyLogo role role role role role\"\r\n    \"empty3 empty3 empty3 empty3 empty3 empty3\"\r\n    \"empty4 empty4 prevBtn nextBtn empty5 empty5\"\r\n    \"empty empty main main main main\"\r\n    \"footer footer footer footer footer footer\";\r\n  \r\n    grid-column-gap: 1rem;\r\n    height: 100vh;\r\n} \r\n\r\n.b4{\r\n    grid-area: b4;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.b5{\r\n    grid-area: b5;\r\n} \r\n\r\n.b6{\r\n    grid-area: b6;\r\n} \r\n\r\n.b7{\r\n    grid-area: b7;\r\n} \r\n\r\n.b8{\r\n    grid-area: b8;\r\n} \r\n\r\n.companyLogo{\r\n    grid-area: companyLogo;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 2rem;\r\n\r\n   \r\n   \r\n} \r\n\r\n.img2{\r\n    grid-area: main;\r\n    width: 60%;\r\n    height: auto;\r\n    margin-top: 2rem;\r\n    border: rgb(226, 153, 17) solid 5px;\r\n \r\n } \r\n\r\n.company{\r\n     grid-area: company;\r\n     color: rgb(39, 49, 141);\r\n     font-weight: bold;\r\n     width: 100%;\r\n     margin-left: 2rem;\r\n     margin-top: 4rem;\r\n   \r\n } \r\n\r\n.experince span{\r\n     color: rgb(168, 155, 182);\r\n } \r\n\r\n.title{\r\n    grid-area: title;\r\n    color: rgb(39, 49, 141);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 4rem;\r\n   \r\n} \r\n\r\n.role{\r\n    grid-area: role;\r\n    color: rgb(39, 49, 141);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 4rem;\r\n   \r\n} \r\n\r\n.nextBtn{\r\n    grid-area: nextBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 2rem;\r\n    margin-left: 2rem;\r\n    \r\n   \r\n} \r\n\r\n.prevBtn{\r\n    grid-area: prevBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 2rem;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.skills{\r\n    display: grid;\r\n    /* grid-template-columns: minmax(60px,100px) minmax(40px,100px) minmax(40px,100px) minmax(60px,100px) minmax(60px,1fr) minmax(120px,1fr); */\r\n    grid-template-columns: 30px 100px 100px 100px repeat(10,auto);\r\n    grid-template-rows: repeat(9,auto);\r\n    grid-template-areas: \r\n    \"e b9 b10 b11 e1 e1 e1 e1 e1 e1 e1 e1 e1 e1\"\r\n    \"t1 t1 t1 t1 t1 e2 desktopSkill1 desktopSkill2 desktopSkill3 e3 e3 e3 e3 e3\"\r\n    \"t2 t2 t2 t2 t2 e4 desktopSkill4 desktopSkill5 e5 e5 e5 e5 e5 e5\"\r\n    \"t3 t3 t3 t3 t3 e6 desktopSkill6 desktopSkill7 desktopSkill8 e7 e7 e7 e7 e7\"\r\n    \"t4 t4 t4 t4 t4 e8 desktopSkill9 desktopSkill10 desktopSkill11 e9 e9 e9 e9 e9\";\r\n    /* \"t2 t2 desktopSkill4 desktopSkill5 e3 e3 e3 e3 e3 e3\"\r\n    \"t3 t3 desktopSkill6 desktopSkill7 desktopSkill8 e4 e4 e4 e4 e4\"\r\n    \"t4 t4 desktopSkill9 desktopSkill10 desktopSkill11 e5 e5 e5 e5 e5\"; */\r\n   \r\n    height: 100vh;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b9:focus{\r\n    box-shadow: rgb(233, 224, 224);\r\n    \r\n} \r\n\r\n.b9:hover{\r\n    border: rgb(231, 222, 240) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b10{\r\n    grid-area: b10;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b10:focus{\r\n    box-shadow: rgb(238, 234, 234);\r\n    \r\n} \r\n\r\n.b10:hover{\r\n    border: rgb(238, 234, 241) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b11{\r\n    grid-area: b11;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b11:focus{\r\n    box-shadow: rgb(247, 245, 245);\r\n    \r\n} \r\n\r\n.b11:hover{\r\n    border: rgb(249, 246, 252) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.t1{\r\n    grid-area: t1;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t2{\r\n    grid-area: t2;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.t3{\r\n    grid-area: t3;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t4{\r\n    grid-area: t4;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.desktopSkill1{\r\n    grid-area: desktopSkill1;\r\n   \r\n} \r\n\r\n.desktopSkill2{\r\n    grid-area: desktopSkill2;\r\n    \r\n} \r\n\r\n.desktopSkill3{\r\n    grid-area: desktopSkill3;\r\n    \r\n} \r\n\r\n.desktopSkill4{\r\n    grid-area: desktopSkill4;\r\n   \r\n} \r\n\r\n.desktopSkill5{\r\n    grid-area: desktopSkill5;\r\n  \r\n} \r\n\r\n.desktopSkill6{\r\n    grid-area: desktopSkill6;\r\n   \r\n} \r\n\r\n.desktopSkill7{\r\n    grid-area: desktopSkill7;\r\n \r\n} \r\n\r\n.desktopSkill8{\r\n    grid-area: desktopSkill8;\r\n  \r\n} \r\n\r\n.desktopSkill9{\r\n    grid-area: desktopSkill9;\r\n   \r\n} \r\n\r\n.desktopSkill10{\r\n    grid-area: desktopSkill10;\r\n  \r\n} \r\n\r\n.desktopSkill11{\r\n    grid-area: desktopSkill11;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUY7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFNQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0FBRWxJOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhOztJQUViLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtFQUErRTtJQUMvRSxxQ0FBcUM7SUFD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QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSx3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICp7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9IFxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuYXNpZGV7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2E4YzBmZjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2YyYjk2LCAjYThjMGZmKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjJiOTYsICNhOGMwZmYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG59XHJcblxyXG4uZGF0ZXtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyNDMsIDIzNik7XHJcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG59XHJcblxyXG4ubXlQaG90b3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiKDU0LCA1MiwgNTIpXHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLm5hdiBidXR0b257XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLm5hdiBidXR0b246aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XHJcbiAgIFxyXG59XHJcblxyXG4ubmF2QnRue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWFpbi1hcmVhe1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMGRlZywgIzJiNTg3NiAwJSwgIzRlNDM3NiAxMDAlKTtcclxufVxyXG5cclxuLmFib3V0e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5hYm91dFRleHR7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcblxyXG4uZWR1Y2F0aW9ue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmVkdWNhdGlvbkdyaWR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwyMDBweCkgbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCg2MHB4LDIwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNjAwcHggMTAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiYjEgYjIgYjNcIlxyXG4gICAgXCJtYWluIG1haW4gbWFpblwiXHJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5nMXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucm93e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIFxyXG59XHJcblxyXG4uYntcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4uYjF7XHJcbiAgICBncmlkLWFyZWE6IGIxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW1cclxufVxyXG5cclxuLmIye1xyXG4gICAgZ3JpZC1hcmVhOiBiMjtcclxufVxyXG5cclxuLmIze1xyXG4gICAgZ3JpZC1hcmVhOiBiMztcclxufVxyXG5cclxuLmltZzF7XHJcbiAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5kZWdyZWVJbmZve1xyXG4gICAgZ3JpZC1hcmVhOiBmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZXhwZXJpbmNle1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwyMDBweCkgbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCg2MHB4LDIwMHB4KSBtaW5tYXgoNjBweCwyMDBweCkgbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCgxMjBweCwyMDBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggNDBweCA0MHB4IDQwcHggMTAwcHggNDBweCA3MDBweCAxMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJiNCBiNSBiNiBiNyBiOCBlbXB0eTFcIlxyXG4gICAgXCJjb21wYW55TG9nbyBjb21wYW55IGNvbXBhbnkgY29tcGFueSBjb21wYW55IGNvbXBhbnlcIlxyXG4gICAgXCJjb21wYW55TG9nbyB0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIHJvbGUgcm9sZSByb2xlIHJvbGUgcm9sZVwiXHJcbiAgICBcImVtcHR5MyBlbXB0eTMgZW1wdHkzIGVtcHR5MyBlbXB0eTMgZW1wdHkzXCJcclxuICAgIFwiZW1wdHk0IGVtcHR5NCBwcmV2QnRuIG5leHRCdG4gZW1wdHk1IGVtcHR5NVwiXHJcbiAgICBcImVtcHR5IGVtcHR5IG1haW4gbWFpbiBtYWluIG1haW5cIlxyXG4gICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gIFxyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmI0e1xyXG4gICAgZ3JpZC1hcmVhOiBiNDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYjV7XHJcbiAgICBncmlkLWFyZWE6IGI1O1xyXG59XHJcblxyXG4uYjZ7XHJcbiAgICBncmlkLWFyZWE6IGI2O1xyXG59XHJcblxyXG4uYjd7XHJcbiAgICBncmlkLWFyZWE6IGI3O1xyXG59XHJcblxyXG4uYjh7XHJcbiAgICBncmlkLWFyZWE6IGI4O1xyXG59XHJcblxyXG4uY29tcGFueUxvZ297XHJcbiAgICBncmlkLWFyZWE6IGNvbXBhbnlMb2dvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgXHJcbiAgIFxyXG59XHJcblxyXG4uaW1nMntcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgYm9yZGVyOiByZ2IoMjI2LCAxNTMsIDE3KSBzb2xpZCA1cHg7XHJcbiBcclxuIH1cclxuXHJcbiAuY29tcGFueXtcclxuICAgICBncmlkLWFyZWE6IGNvbXBhbnk7XHJcbiAgICAgY29sb3I6IHJnYigzOSwgNDksIDE0MSk7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgXHJcbiB9XHJcblxyXG4gLmV4cGVyaW5jZSBzcGFue1xyXG4gICAgIGNvbG9yOiByZ2IoMTY4LCAxNTUsIDE4Mik7XHJcbiB9XHJcblxyXG4gLnRpdGxle1xyXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgIGNvbG9yOiByZ2IoMzksIDQ5LCAxNDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgIFxyXG59XHJcblxyXG4ucm9sZXtcclxuICAgIGdyaWQtYXJlYTogcm9sZTtcclxuICAgIGNvbG9yOiByZ2IoMzksIDQ5LCAxNDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgIFxyXG59XHJcblxyXG4ubmV4dEJ0bntcclxuICAgIGdyaWQtYXJlYTogbmV4dEJ0bjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuLnByZXZCdG57XHJcbiAgICBncmlkLWFyZWE6IHByZXZCdG47XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5za2lsbHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwxMDBweCkgbWlubWF4KDQwcHgsMTAwcHgpIG1pbm1heCg0MHB4LDEwMHB4KSBtaW5tYXgoNjBweCwxMDBweCkgbWlubWF4KDYwcHgsMWZyKSBtaW5tYXgoMTIwcHgsMWZyKTsgKi9cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxMDBweCAxMDBweCAxMDBweCByZXBlYXQoMTAsYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImUgYjkgYjEwIGIxMSBlMSBlMSBlMSBlMSBlMSBlMSBlMSBlMSBlMSBlMVwiXHJcbiAgICBcInQxIHQxIHQxIHQxIHQxIGUyIGRlc2t0b3BTa2lsbDEgZGVza3RvcFNraWxsMiBkZXNrdG9wU2tpbGwzIGUzIGUzIGUzIGUzIGUzXCJcclxuICAgIFwidDIgdDIgdDIgdDIgdDIgZTQgZGVza3RvcFNraWxsNCBkZXNrdG9wU2tpbGw1IGU1IGU1IGU1IGU1IGU1IGU1XCJcclxuICAgIFwidDMgdDMgdDMgdDMgdDMgZTYgZGVza3RvcFNraWxsNiBkZXNrdG9wU2tpbGw3IGRlc2t0b3BTa2lsbDggZTcgZTcgZTcgZTcgZTdcIlxyXG4gICAgXCJ0NCB0NCB0NCB0NCB0NCBlOCBkZXNrdG9wU2tpbGw5IGRlc2t0b3BTa2lsbDEwIGRlc2t0b3BTa2lsbDExIGU5IGU5IGU5IGU5IGU5XCI7XHJcbiAgICAvKiBcInQyIHQyIGRlc2t0b3BTa2lsbDQgZGVza3RvcFNraWxsNSBlMyBlMyBlMyBlMyBlMyBlM1wiXHJcbiAgICBcInQzIHQzIGRlc2t0b3BTa2lsbDYgZGVza3RvcFNraWxsNyBkZXNrdG9wU2tpbGw4IGU0IGU0IGU0IGU0IGU0XCJcclxuICAgIFwidDQgdDQgZGVza3RvcFNraWxsOSBkZXNrdG9wU2tpbGwxMCBkZXNrdG9wU2tpbGwxMSBlNSBlNSBlNSBlNSBlNVwiOyAqL1xyXG4gICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5iOXtcclxuICAgIGdyaWQtYXJlYTogYjk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjZzO1xyXG59XHJcblxyXG4uYjk6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjMzLCAyMjQsIDIyNCk7XHJcbiAgICBcclxufVxyXG5cclxuLmI5OmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjMxLCAyMjIsIDI0MCkgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLmIxMHtcclxuICAgIGdyaWQtYXJlYTogYjEwO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmIxMDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IHJnYigyMzgsIDIzNCwgMjM0KTtcclxuICAgIFxyXG59XHJcblxyXG4uYjEwOmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjM4LCAyMzQsIDI0MSkgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLmIxMXtcclxuICAgIGdyaWQtYXJlYTogYjExO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmIxMTpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDcsIDI0NSwgMjQ1KTtcclxuICAgIFxyXG59XHJcblxyXG4uYjExOmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjQ5LCAyNDYsIDI1MikgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLnQxe1xyXG4gICAgZ3JpZC1hcmVhOiB0MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBcclxufVxyXG5cclxuLnQye1xyXG4gICAgZ3JpZC1hcmVhOiB0MjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIFxyXG59XHJcblxyXG4udDN7XHJcbiAgICBncmlkLWFyZWE6IHQzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgIFxyXG59XHJcblxyXG4udDR7XHJcbiAgICBncmlkLWFyZWE6IHQ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgXHJcbn1cclxuXHJcblxyXG4uZGVza3RvcFNraWxsMXtcclxuICAgIGdyaWQtYXJlYTogZGVza3RvcFNraWxsMTtcclxuICAgXHJcbn1cclxuXHJcbi5kZXNrdG9wU2tpbGwye1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGwyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kZXNrdG9wU2tpbGwze1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGwzO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kZXNrdG9wU2tpbGw0e1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGw0O1xyXG4gICBcclxufVxyXG5cclxuLmRlc2t0b3BTa2lsbDV7XHJcbiAgICBncmlkLWFyZWE6IGRlc2t0b3BTa2lsbDU7XHJcbiAgXHJcbn1cclxuXHJcbi5kZXNrdG9wU2tpbGw2e1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGw2O1xyXG4gICBcclxufVxyXG5cclxuLmRlc2t0b3BTa2lsbDd7XHJcbiAgICBncmlkLWFyZWE6IGRlc2t0b3BTa2lsbDc7XHJcbiBcclxufVxyXG5cclxuLmRlc2t0b3BTa2lsbDh7XHJcbiAgICBncmlkLWFyZWE6IGRlc2t0b3BTa2lsbDg7XHJcbiAgXHJcbn1cclxuXHJcbi5kZXNrdG9wU2tpbGw5e1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGw5O1xyXG4gICBcclxufVxyXG5cclxuLmRlc2t0b3BTa2lsbDEwe1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGwxMDtcclxuICBcclxufVxyXG5cclxuLmRlc2t0b3BTa2lsbDExe1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNrdG9wU2tpbGwxMTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _siteService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteService */ "./src/app/siteService.ts");



// import {enableProdMode} from '@angular/core';
let AppComponent = class AppComponent {
    constructor(siteService) {
        this.siteService = siteService;
        this.title = 'kamparsen-site';
        this.camoziImages = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG"];
        this.allMonth = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.siteService.GetDateTimeInfo();
    }
    ngOnInit() {
        // enableProdMode();
        this.siteService.timeDateModel.subscribe(timeData => {
            this.currentWeekDay = timeData.dayOfTheWeek;
            this.currentMonth = this.allMonth[Number(timeData.currentDateTime.substring(5, 7))];
            this.currentDay = timeData.currentDateTime.substring(8, 10);
            this.currentYear = timeData.currentDateTime.substring(0, 4);
            this.currentTime = timeData.currentDateTime.substring(11, 16);
            this.siteService.GetWeatherInfo();
            this.hideAllSkills();
            this.hideAllExperinces();
            this.currentCamozziImageIndex = 0;
        });
        this.siteService.weatherModel.subscribe(weatherData => {
            this.currentTemp = Math.floor(this.ConvertKelvinToFarenhite(weatherData.main.temp));
        });
        this.loadAbout();
    }
    ConvertKelvinToFarenhite(params) {
        return (params - 273.15) * 1.8 + 32;
    }
    setComozziImages() {
    }
    ShowBachelorDegree() { this.educationImage = "../assets/i2.JPG"; }
    ShowSeniorDesign() { this.educationImage = "../assets/i3.JPG"; }
    ShowMasterDegree() { this.educationImage = "../assets/i1.JPG"; }
    Show1999() {
        this.hideAllExperinces();
        this.show1999 = true;
        this.company = "CAMOZZI , Pneumatic and Automation";
        this.companyLogo = "../assets/companyLogo.png";
        this.jobtitle = "Electrical and Automation  Engineer";
        this.responsibalities = "Electrical Panel design , PLC programming , Robotics and Automation.";
        this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
    }
    Show2002() {
        this.hideAllExperinces();
        this.show2002 = true;
        this.company = "Honeywell";
        this.companyLogo = "../assets/honeywellLogo.png";
        this.jobtitle = "Electrical , BMS, BAS  Engineer";
        this.responsibalities = "Smart Building design for HVAC systems. ";
    }
    Show2008() {
        this.hideAllExperinces();
        this.show2008 = true;
        this.company = "Raytheon";
        this.companyLogo = "../assets/raytheonLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    }
    Show2010() {
        this.hideAllExperinces();
        this.show2010 = true;
        this.company = "ESPN";
        this.companyLogo = "../assets/espnLogo.png";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    }
    Show2013() {
        this.hideAllExperinces();
        this.show2013 = true;
        this.company = "Nova Techhologies";
        this.companyLogo = "../assets/novaLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";
    }
    prevImage() {
        this.currentCamozziImageIndex--;
        if (this.currentCamozziImageIndex <= 0)
            this.currentCamozziImageIndex = 5;
        this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
    }
    nextImage() {
        this.currentCamozziImageIndex++;
        if (this.currentCamozziImageIndex >= 5)
            this.currentCamozziImageIndex = 0;
        this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
    }
    loadAbout() {
        this.hideAllSections();
        this.showAbout = true;
    }
    loadEducation() {
        this.hideAllSections();
        this.showEducation = true;
    }
    loadExperience() {
        this.hideAllSections();
        this.showExperience = true;
    }
    loadSkills() {
        this.hideAllSections();
        this.hideAllExperinces();
        this.hideAllSkills();
        this.showSkills = true;
        this.showDesktopSkills = true;
    }
    loadInterests() {
        this.hideAllSections();
        this.showInterests = true;
    }
    loadContact() {
        this.hideAllSections();
        this.showContact = true;
    }
    hideAllSections() {
        this.showAbout = false;
        this.showEducation = false;
        this.showExperience = false;
        this.showSkills = false;
        this.showInterests = false;
        this.showContact = false;
    }
    hideAllExperinces() {
        this.show1999 = false;
        this.show2002 = false;
        this.show2008 = false;
        this.show2010 = false;
    }
    hideAllSkills() {
        this.showDesktopSkills = false;
        this.showWebSkills = false;
        this.showFirmwareSkills = false;
    }
    ShowDesktopSkills() {
        this.hideAllSkills();
        this.showDesktopSkills = true;
    }
    ShowWebSkills() {
        this.hideAllSkills();
        this.showWebSkills = true;
    }
    ShowFirmwareSkills() {
        this.hideAllSkills();
        this.showFirmwareSkills = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_siteService__WEBPACK_IMPORTED_MODULE_2__["SiteService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _DateTimeModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateTimeModel */ "./src/app/DateTimeModel.ts");
/* harmony import */ var _siteService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./siteService */ "./src/app/siteService.ts");







let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SiteService = class SiteService {
    constructor(http) {
        this.http = http;
        this.timeDateModel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.weatherModel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GetDateTimeInfo() {
        this.http.get('http://worldclockapi.com/api/json/est/now').subscribe(data => {
            this.timeDateModel.next(data);
            console.log(data.currentDateTime);
        });
    }
    GetWeatherInfo() {
        this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=34787,us&APPID=48c9253d856985a9b820967927888247').subscribe(data => {
            this.weatherModel.next(data);
            console.log(data.main.temp);
        });
    }
};
SiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SiteService);



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

module.exports = __webpack_require__(/*! C:\Users\Kam\Documents\GitHub\kamparsen-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map