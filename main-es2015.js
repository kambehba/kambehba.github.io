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

module.exports = "\r\n<div class=\"container\">\r\n\r\n    \r\n    <aside>\r\n        <br>\r\n        <p class=\"date\">Today is {{currentDate}}\r\n            <br><br><span> Orlando Florida</span> <br><br>\r\n            <span> Temp: {{currentTemp}} F</span> </p>\r\n        <img class=\"myPhoto\" src=\"../assets/kamparsen.jpg\" alt=\"Italian Trulli\">\r\n        <nav class=\"nav\">\r\n            <button class=\"navBtn btn-success\" (click)=\"loadAbout()\">About</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadEducation()\">Education</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadExperience()\">Experience</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadSkills()\">Skills</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadInterests()\">Interests</button>\r\n            <button class=\"navBtn btn-success\" (click)=\"loadContact()\">Contact</button> \r\n\r\n          \r\n\r\n        </nav>\r\n    </aside>\r\n\r\n    <main>\r\n        <section class=\"main-area\">\r\n\r\n            <!-- about starts -->\r\n            <section class=\"about\" *ngIf=\"showAbout\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Kam\r\n                        <span class=\"text-success\">Parsen</span>\r\n                    </h1>\r\n                </header>\r\n                <article class=\"aboutText\">\r\n                    Thank you for visiting my site !<br /><br />\r\n                    I am a problem solver who does Engineering not only\r\n                    to make a living but also as a passion and hoppy.<br /><br />\r\n                    I started my carrier back in 1999 by falling in love with Automation and Programming PLCs.<br />\r\n                    Since then I have worked on veraity of projects from Embeded systems to Desktop and Web Application.<br /><br />\r\n                    Readability and Scalability are the two main factor for me when I am writing Software or Firmware.\r\n\r\n                </article>\r\n            </section>\r\n            <!-- about ends -->\r\n\r\n            <!-- education starts -->\r\n            <div class=\"education\" *ngIf=\"showEducation\">\r\n                <div>\r\n                    <header>\r\n\r\n                        <h1 class=\"display-3 text-uppercase\">Purdue\r\n                            <span class=\"text-success\">Univeristy</span>\r\n                        </h1>\r\n                    </header>\r\n                    <p class=\"EducationFont\">Bachelor of Science in Computer Engineering - 2005-2009</p>\r\n                    <img class=\"img1\" src=\"../assets/i2.JPG\">\r\n                </div>\r\n                \r\n                <hr class=\"divider\">\r\n                \r\n                <div>\r\n                    <header>\r\n                        <h1 class=\"display-3 text-uppercase\">Purdue\r\n                            <span class=\"text-success\">Univeristy</span>\r\n                        </h1>\r\n                    </header>\r\n                    <p class=\"EducationFont\">Master Degree - Software Engineering 2009 - 2010</p>\r\n                    <img class=\"img1\" src=\"../assets/i1.JPG\">\r\n                </div>\r\n\r\n                <hr class=\"divider\">\r\n\r\n                <div>\r\n                        <header>\r\n                            <h1 class=\"display-3 text-uppercase\">Purdue\r\n                                <span class=\"text-success\">Univeristy</span>\r\n                            </h1>\r\n                        </header>\r\n                        <p class=\"EducationFont\">Winner of Best Sceinor Design 2009 </p>\r\n                        <img class=\"img1\" src=\"../assets/i3.JPG\">\r\n                </div>\r\n               \r\n            </div>\r\n            <!-- education ends -->\r\n\r\n\r\n            <!-- experince starts -->\r\n\r\n            <div  class=\"experince\" *ngIf=\"showExperience\">\r\n                    <div>\r\n                        <img class=\"img1\" src=\"../assets/novaLogo.jpg\">\r\n                        <div class=\"experinceHeaderFont\">Nova Technologies , Orlando FL , 2013- present</div>\r\n                        <div class=\"experinceHeaderFont\">Title: Software Engineer </div>\r\n                        <p class=\"EducationFont\">\r\n                                Design and Development of the next Generation of Call for Fire Trainers.<br /><br />\r\n                                CFFT III is a Trainer/Simulator Environment designed to Train Joint Fire Observers. <br />\r\n                                Simulates War Enviroment in a very cost-effective way .<br/><br/>\r\n                                Developed in WPF Framework with Prism Modules , highley scalable.<br/> \r\n                                I have been responsible for the Design and Development of multiple Featuers. <br />\r\n                                \r\n                                To name a few modules I worked on : Indirect Fire , Precision Strike, Message Center , Naval Fire \r\n                        </p>\r\n                       \r\n                    </div>\r\n                        \r\n                    <hr class=\"divider\">\r\n\r\n                    <div>\r\n                            <img class=\"img2\" src=\"../assets/espnLogo.png\">\r\n                            <div class=\"experinceHeaderFont\">Altura Tech-ESPN  , Orlando FL , 2010- 2013</div>\r\n                            <div class=\"experinceHeaderFont\">Title: Software Engineer</div>\r\n                            <p class=\"EducationFont\">\r\n                                    Sports Statestics Software , Design and Development for ESPN network.<br />\r\n                                    Distributed sytem with WPF front End and WCF middleware and SQL database<br />\r\n                            </p>\r\n                           \r\n                     </div>\r\n\r\n                     <hr class=\"divider\">\r\n\r\n                     <div>\r\n                            <img class=\"img2\" src=\"../assets/raytheonLogo.jpg\">\r\n                            <div class=\"experinceHeaderFont\">Software Engineer , 2008- 2010</div>\r\n                            <p class=\"EducationFont\">\r\n                                    Worked within a large group of Engineers. <br/>\r\n                                    As a Software Engineer. I was involved in Full cycle of water fall Software Development process.<br />\r\n                                    Requirment , Design and Implementation for Mission Planner System for V-22 Aircraft<br />\r\n                            </p>\r\n                           \r\n                     </div>\r\n\r\n            </div>\r\n\r\n                \r\n\r\n           \r\n\r\n\r\n\r\n            <!-- <section class=\"experince\" *ngIf=\"showExperience\">\r\n                <button class=\"b b4 btn-success\" (click)=\"Show1999()\">1999-2002</button>\r\n                <button class=\"b b5 btn-success\" (click)=\"Show2002()\">2002-2004</button>\r\n                <button class=\"b b6 btn-success\" (click)=\"Show2008()\">2008-2010</button>\r\n                <button class=\"b b7 btn-success\" (click)=\"Show2010()\">2010-2013</button>\r\n                <button class=\"b b8 btn-success\" (click)=\"Show2013()\">2013-2019</button>\r\n                <button class=\"b b9 btn-success\" (click)=\"ShowGithub()\">GitHub</button>\r\n\r\n                <button *ngIf=\"show1999 || show2010 || show2008 || show2013\" class=\"prevBtn btn-success\"\r\n                    (click)=\"prevImage()\">Prev</button>\r\n                <button *ngIf=\"show1999 || show2010 || show2008 || show2013\" class=\"nextBtn btn-success\"\r\n                    (click)=\"nextImage()\">Next</button>\r\n\r\n\r\n\r\n                <img *ngIf=\"show1999\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show1999\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show1999\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show1999\" class=\"role\">Responsibalities: <span>{{responsibalities}}</span> </div>\r\n                <img *ngIf=\"show1999\" class=\"img2\" src={{camozziImage}}>\r\n\r\n                <img *ngIf=\"show2002\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2002\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2002\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2002\" class=\"role\">Responsibalities: <article style=\"color: rgb(123, 255, 0)\">\r\n                        Worked within a small team of Engineers.<br />\r\n                        BMS system Design , implementation and install in site<br />\r\n                        for two hospital and one residential building.\r\n\r\n                    </article>\r\n                </div>\r\n\r\n                <img *ngIf=\"show2008\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2008\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2008\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2008\" class=\"role\">Responsibalities:\r\n                        <article style=\"color: rgb(123, 255, 0)\">\r\n                                Worked within a large group of Engineers. <br/>\r\n                                As a Software Engineer. I was involved in Full cycle of water fall Software Development process.<br />\r\n                                Requirment , Design and Implementation for Mission Planner System for V-22 Aircraft<br />\r\n                               \r\n        \r\n                         </article> \r\n                </div>\r\n                <img *ngIf=\"show2008\" class=\"img2\" src={{raytheonImage}}>\r\n\r\n                <img *ngIf=\"show2010\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2010\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2010\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2010\" class=\"role\">Responsibalities: \r\n                        <article style=\"color: rgb(123, 255, 0)\">\r\n                               Sports Statestics Software , Design and Development for ESPN network.<br />\r\n                               Distributed sytem with WPF front End and WCF middleware and SQL database<br />\r\n                        </article>\r\n                </div>\r\n                <img *ngIf=\"show2010\" class=\"img2\" src=\"{{espnImage}}\">\r\n\r\n\r\n                <img *ngIf=\"show2013\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"show2013\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"show2013\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"show2013\" class=\"role\">Responsibalities: \r\n                        <article style=\"color: rgb(123, 255, 0)\">\r\n                                Design and Development of the next Generation of Call for Fire Trainers.<br />\r\n                                CFFT III is a Trainer/Simulator Environment designed to Train Joint Fire Observers. <br />\r\n                                Simulates War Enviroment in a very cost-effective way .<br/><br/>\r\n                                Developed in WPF Framework with Prism Modules , highley scalable.<br/> \r\n                                I have been responsible for the Design and Development of multiple Featuers. <br />\r\n                                \r\n                                To name a few modules I worked on : Indirect Fire , Precision Strike, Message Center , Naval Fire \r\n\r\n                         </article>\r\n                </div>\r\n                <img *ngIf=\"show2013\" class=\"img2\" src={{novaImage}}>\r\n\r\n                <img *ngIf=\"showGithub\" class=\"companyLogo\" src={{companyLogo}}>\r\n                <div *ngIf=\"showGithub\" class=\"company\">Company: <span>{{company}}</span> </div>\r\n                <div *ngIf=\"showGithub\" class=\"title\">Title: <span>{{jobtitle}}</span> </div>\r\n                <div *ngIf=\"showGithub\" class=\"role\">Responsibalities: \r\n                        <article style=\"color: rgb(123, 255, 0)\">\r\n                                I have 20 Repositories in Github .<br />\r\n                                They are from Web applications to IoT projects. <br />\r\n                                \r\n\r\n                         </article>\r\n                </div>\r\n                <img *ngIf=\"showGithub\" class=\"img2\" src={{githubImage}}>\r\n\r\n\r\n            </section> -->\r\n            <!-- experince ends -->\r\n\r\n           \r\n\r\n\r\n            <!-- skills starts -->\r\n            <section class=\"skills\" *ngIf=\"showSkills\">\r\n                <button class=\"b b9 btn-primary\" (click)=\"ShowDesktopSkills()\">DESKTOP</button>\r\n                <button class=\"b b10 btn-danger\" (click)=\"ShowWebSkills()\">WEB</button>\r\n                <button class=\"b b11 btn-warning\" (click)=\"ShowFirmwareSkills()\">HARDWARE</button>\r\n\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Programming Languages: <span\r\n                            class=\"display-3 text-uppercase text-white\"> C , C++ , C# </span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Markup Languages: <span\r\n                            class=\"display-3 text-uppercase text-white\">XAML , XML</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Frameworks , Libraries: <span\r\n                            class=\"display-3 text-uppercase text-white\">.NET WPF , WCF , PRISM</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showDesktopSkills\" class=\"t4\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Design Patterns: <span\r\n                            class=\"display-3 text-uppercase text-white\">MVVM , Dependency Injection , Command</span>\r\n                    </h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Client Side: <span\r\n                            class=\"display-3 text-uppercase text-white\"> AngularJs , HTML , CSS , Bootstrap ,<br />\r\n                            Visual Studio Code</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Server Side: <span\r\n                            class=\"display-3 text-uppercase text-white\">NodeJS , Express ,RESTfull Services ,\r\n                            Javascript</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showWebSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Database: <span\r\n                            class=\"display-3 text-uppercase text-white\">Mongo DB , Firebase Database</span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">PLC: <span\r\n                            class=\"display-3 text-uppercase text-white\"> Allen Bradlley , Siemens S7 , Omron\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Microcontrollers: <span\r\n                            class=\"display-3 text-uppercase text-white\"> ESP8266 , Arduino ,PIC and Rasberry PI\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header *ngIf=\"showFirmwareSkills\" class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Fimware: <span\r\n                            class=\"display-3 text-uppercase text-white\"> C , and Assembely</span></h2>\r\n                </header>\r\n\r\n\r\n\r\n            </section>\r\n            <!-- skills ends -->\r\n\r\n            <!-- interests -->\r\n            <section class=\"interests\" *ngIf=\"showInterests\">\r\n\r\n                <header *ngIf=\"showInterest1\" class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Arteficial Intellegence</h2>\r\n                </header>\r\n                <img *ngIf=\"showInterest1\" class=\"interestImage\" src=\"../assets/i20.JPG\">\r\n                <article *ngIf=\"showInterest1\" class=\"interest1Text\">I like to Interface with AI to create next\r\n                    generation of Apps</article>\r\n\r\n                <header *ngIf=\"showInterest2\" class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Full Stack Development </h2>\r\n                </header>\r\n                <img *ngIf=\"showInterest2\" class=\"interestImage\" src=\"../assets/i21.JPG\">\r\n                <article *ngIf=\"showInterest2\" class=\"interest1Text\">Like to use NodeJs as my backend RESTfull API and\r\n                    AngularJs for my front End </article>\r\n\r\n                <header *ngIf=\"showInterest3\" class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Algorithems and Data Structuer</h2>\r\n                </header>\r\n                <img *ngIf=\"showInterest3\" class=\"interestImage\" src=\"../assets/i22.JPG\">\r\n                <article *ngIf=\"showInterest3\" class=\"interest1Text\">Writing Efficient Algorithems to solve problems is\r\n                    my passion. </article>\r\n\r\n                <header *ngIf=\"showInterest4\" class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Microcontrollers and PLCs</h2>\r\n                </header>\r\n                <img *ngIf=\"showInterest4\" class=\"interestImage\" src=\"../assets/i23.JPG\">\r\n                <article *ngIf=\"showInterest4\" class=\"interest1Text\">I started my carrier with Programming PLCs for\r\n                    Automation lines.<br /></article>\r\n\r\n                <header *ngIf=\"showInterest5\" class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">IoT - Interet of Things</h2>\r\n                </header>\r\n                <img *ngIf=\"showInterest5\" class=\"interestImage\" src=\"../assets/iot.JPG\">\r\n                <article *ngIf=\"showInterest5\" class=\"interest1Text\">I have done multiple IoT projects and like to\r\n                    expand my skills on this area.<br /></article>\r\n\r\n                <button *ngIf=\"showInterests\" class=\"interestPrevBtn btn-primary\"\r\n                    (click)=\"prevInterestImage()\">Prev</button>\r\n\r\n                <button *ngIf=\"showInterests\" class=\"interestNextBtn btn-primary\"\r\n                    (click)=\"nextInterestImage()\">Next</button>\r\n            </section>\r\n            <!-- interests ends -->\r\n\r\n            <!-- contact -->\r\n            <section class=\"contact\" *ngIf=\"showContact\">\r\n\r\n                <header class=\"contact1\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Email : Kamparsen@yahoo.com</h2>\r\n                </header>\r\n\r\n                <header class=\"contact2\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Cell : 407.455.2707</h2>\r\n                </header>\r\n\r\n            </section>\r\n            <!-- contacts ends -->\r\n\r\n\r\n\r\n\r\n\r\n        </section>\r\n        <!-- main area ends -->\r\n\r\n    </main>\r\n\r\n\r\n\r\n</div>"

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

module.exports = "\r\n *{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n  } \r\n\r\n.container{\r\n   \r\n    display: grid;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n} \r\n\r\n.m1{\r\n    background: rebeccapurple;\r\n    width: 60px;\r\n    margin: 1rem;\r\n} \r\n\r\naside{\r\n    display: grid;\r\n    grid-column: 1;\r\n    align-content: center;\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 300px;\r\n    background: #a8c0ff;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n} \r\n\r\n.date{\r\n    color: rgb(247, 243, 236);\r\n    align-content:center;\r\n    margin-bottom: 1rem;\r\n    margin-left: 1rem;\r\n    font-size: large;\r\n\r\n} \r\n\r\n.myPhoto{\r\n    width: 70%;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    border: 2px solid wheat;\r\n    box-shadow: 0 10px 20px rgb(54, 52, 52)\r\n} \r\n\r\n.nav{\r\n    display: grid;\r\n    justify-items: center;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.nav button{\r\n    font-size: 110%;\r\n    color: wheat;\r\n    margin-bottom: 1rem;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.nav button:hover{\r\n    text-decoration: none;\r\n    -webkit-transform: scale(1.4);\r\n            transform: scale(1.4);\r\n} \r\n\r\nmain{\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n   \r\n} \r\n\r\n.navBtn{\r\n    width: 100px;\r\n    height: 30px; \r\n} \r\n\r\n.main-area{\r\n    grid-column: 2/3;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);\r\n} \r\n\r\n.about{\r\n    display: grid;\r\n    align-content: center;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n\r\n} \r\n\r\n.aboutText{\r\n    margin: 2rem;\r\n    font-size: xx-large;\r\n    color: #ecedf0;\r\n    align-self: center;\r\n    width: 700px;\r\n} \r\n\r\n.education{\r\n   \r\n    width: 900px;\r\n    height: 750px;\r\n    margin-left: 2rem;\r\n    margin-top: 4rem;\r\n    border: #f4f8f4;\r\n    overflow: scroll;\r\n    border-style: groove;\r\n    background: rgba(42, 56, 252, 0.281);\r\n    border-radius: .2rem;\r\n} \r\n\r\n.educationGrid{\r\n    display: grid;\r\n    grid-template-columns: minmax(60px,200px) minmax(60px,200px) minmax(60px,200px);\r\n    grid-template-rows: 100px 600px 100px;\r\n    grid-template-areas: \r\n    \"b1 b2 b3\"\r\n    \"main main main\"\r\n    \"footer footer footer\";\r\n    grid-column-gap: 1rem;\r\n} \r\n\r\n.EducationFont{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    color: #e6eff5;\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.experinceHeaderFont{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: x-large;\r\n    color: #460000;\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.g1{\r\n    width: 400px;\r\n    grid-row: 2;\r\n    align-content: center;\r\n} \r\n\r\n.buttonrow{\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-row: 1;\r\n    \r\n} \r\n\r\n.b{\r\n    margin-top: 2rem;\r\n    height: 30px;\r\n   \r\n} \r\n\r\n.b1{\r\n    grid-area: b1;\r\n    margin-left: 1rem\r\n} \r\n\r\n.b2{\r\n    grid-area: b2;\r\n} \r\n\r\n.b3{\r\n    grid-area: b3;\r\n} \r\n\r\n.img1{\r\n   grid-area: main;\r\n   width:70%;\r\n   height: auto;\r\n   margin-top: 1rem;\r\n   margin-left: 2rem;\r\n   margin: 2rem;\r\n   border: rgb(226, 153, 17) solid 5px;\r\n\r\n} \r\n\r\n.img2{\r\n    grid-area: main;\r\n    width:50%;\r\n    height: 30%;\r\n    margin-top: 1rem;\r\n    margin-left: 2rem;\r\n    margin: 2rem;\r\n \r\n } \r\n\r\n.divider{\r\n   \r\n    color: white;\r\n    border-width: 4px;\r\n    border-style: inset;\r\n    display: block;\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n} \r\n\r\n.degreeInfo{\r\n    grid-area: ff;\r\n    width: 100%;\r\n    height: auto;\r\n} \r\n\r\n.experince0{\r\n    display: grid;\r\n    margin-left: 2rem;\r\n    grid-template-columns: minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px);\r\n    grid-template-rows: minmax(40px,auto) minmax(40px,auto) minmax(40px,auto) minmax(auto,auto) 100px 200px minmax(auto,200px) minmax(auto,200px);\r\n    grid-template-areas: \r\n    \"b4 b5 b6 b7 b8 b9\"\r\n    \"companyLogo company company company company company\"\r\n    \"companyLogo title title title title title\"\r\n    \"companyLogo role role role role role\"\r\n    \"companyLogo empty4 prevBtn nextBtn empty5 empty5\"\r\n    \"empty empty main main main main\"\r\n    \"footer footer main main main main\";\r\n  \r\n    grid-column-gap: 1rem;\r\n    height: 100vh;\r\n} \r\n\r\n.experince{\r\n    width: 900px;\r\n    height: 800px;\r\n    margin-left: 2rem;\r\n    margin-top: 6rem;\r\n    border: #f4f8f4;\r\n    overflow: scroll;\r\n    border-style: groove;\r\n    background: rgba(42, 56, 252, 0.281);\r\n\r\n} \r\n\r\n.b4{\r\n    grid-area: b4;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.b5{\r\n    grid-area: b5;\r\n} \r\n\r\n.b6{\r\n    grid-area: b6;\r\n} \r\n\r\n.b7{\r\n    grid-area: b7;\r\n} \r\n\r\n.b8{\r\n    grid-area: b8;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n} \r\n\r\n.companyLogo{\r\n    grid-area: companyLogo;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 2rem;\r\n\r\n} \r\n\r\n.img2{\r\n    grid-area: main;\r\n   \r\n    border: rgb(226, 153, 17) solid 5px;\r\n    margin-top: 1rem;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n    width: 400px;\r\n    height: 337px;\r\n \r\n } \r\n\r\n.company{\r\n     grid-area: company;\r\n     color: rgb(240, 241, 245);\r\n     font-weight: bold;\r\n     width: 100%;\r\n     margin-left: 2rem;\r\n     margin-top: 2rem;\r\n   \r\n } \r\n\r\n.experince span{\r\n     color: rgb(41, 247, 34);\r\n } \r\n\r\n.title{\r\n    grid-area: title;\r\n    color: rgb(243, 243, 247);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n} \r\n\r\n.role{\r\n    grid-area: role;\r\n    color: rgb(249, 249, 250);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n   \r\n} \r\n\r\n.nextBtn{\r\n    grid-area: nextBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 4rem;\r\n    margin-left: 2rem;\r\n    \r\n   \r\n} \r\n\r\n.prevBtn{\r\n    grid-area: prevBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 4rem;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.skills{\r\n    display: grid;\r\n    /* grid-template-columns: minmax(60px,100px) minmax(40px,100px) minmax(40px,100px) minmax(60px,100px) minmax(60px,1fr) minmax(120px,1fr); */\r\n    grid-template-columns: 30px 100px 100px 100px repeat(10,auto);\r\n    grid-template-rows: repeat(9,auto);\r\n    grid-template-areas: \r\n    \"e b9 b10 b11 e1 e1 e1 e1 e1 e1 e1 e1 e1 e1\"\r\n    \"t1 t1 t1 t1 t1 e2 e2 e2 e2 e2 e2 e2 e2 e2\"\r\n    \"t2 t2 t2 t2 t2 e4 e4 e4 e4 e4 e4 e4 e4 e4\"\r\n    \"t3 t3 t3 t3 t3 e6 e6 e6 e6 e6 e6 e6 e6 e6\"\r\n    \"t4 t4 t4 t4 t4 e8 e8 e8 e8 e8 e8 e8 e8 e8\";\r\n   \r\n   \r\n    height: 100vh;\r\n} \r\n\r\n.skills span{\r\n    font-size:xx-large;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b9:focus{\r\n    box-shadow: rgb(233, 224, 224);\r\n    \r\n} \r\n\r\n.b9:hover{\r\n    border: rgb(231, 222, 240) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b10{\r\n    grid-area: b10;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b10:focus{\r\n    box-shadow: rgb(238, 234, 234);\r\n    \r\n} \r\n\r\n.b10:hover{\r\n    border: rgb(238, 234, 241) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b11{\r\n    grid-area: b11;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b11:focus{\r\n    box-shadow: rgb(247, 245, 245);\r\n    \r\n} \r\n\r\n.b11:hover{\r\n    border: rgb(249, 246, 252) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.t1{\r\n    grid-area: t1;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t2{\r\n    grid-area: t2;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.t3{\r\n    grid-area: t3;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t4{\r\n    grid-area: t4;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.interests{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,minmax(auto,200px));\r\n    grid-template-rows: 50px repeat(4,auto);\r\n    grid-template-areas: \r\n    \"e e e e\"\r\n    \"e1 interest1Title interest1Title interest1Title\"\r\n    \"e2 interestImage interestImage interestImage\"\r\n    \"e3 interest1Text interest1Text interest1Text\"\r\n    \"e4 interestPrevBtn e5 interestNextBtn\";\r\n  \r\n} \r\n\r\n.interest1Title{\r\n    grid-area: interest1Title;\r\n} \r\n\r\n.interestImage{\r\n    grid-area: interestImage;\r\n} \r\n\r\n.interest1Text{\r\n    grid-area: interest1Text;\r\n    font-size: large;\r\n    color: rgb(248, 244, 244);\r\n    font-weight: bold;\r\n} \r\n\r\n.interestNextBtn{\r\n    grid-area: interestNextBtn;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.interestPrevBtn{\r\n    grid-area: interestPrevBtn;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.contact{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,minmax(auto,200px));\r\n    grid-template-rows: 50px repeat(4,auto);\r\n    grid-template-areas: \r\n    \"e e e e\"\r\n    \"e1 contact1 contact1 contact1\"\r\n    \"e2 e2 e2 e2\"\r\n    \"e3 contact2 contact2 contact2\"\r\n    \"e4 e4 e4 e4\";\r\n} \r\n\r\n.contact1{\r\n    grid-area: contact1;\r\n    margin-bottom: 2rem;\r\n\r\n} \r\n\r\n.contact2{\r\n    grid-area: contact2;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUY7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFNQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0FBRWxJOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhOztJQUViLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFF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QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfSBcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBcclxufVxyXG5cclxuLm0xe1xyXG4gICAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuYXNpZGV7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2E4YzBmZjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2YyYjk2LCAjYThjMGZmKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjJiOTYsICNhOGMwZmYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG59XHJcblxyXG4uZGF0ZXtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyNDMsIDIzNik7XHJcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG59XHJcblxyXG4ubXlQaG90b3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiKDU0LCA1MiwgNTIpXHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLm5hdiBidXR0b257XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLm5hdiBidXR0b246aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XHJcbiAgIFxyXG59XHJcblxyXG4ubmF2QnRue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4OyBcclxufVxyXG5cclxuLm1haW4tYXJlYXtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjBkZWcsICMyYjU4NzYgMCUsICM0ZTQzNzYgMTAwJSk7XHJcbn1cclxuXHJcbi5hYm91dHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG59XHJcblxyXG4uYWJvdXRUZXh0e1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiAjZWNlZGYwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4uZWR1Y2F0aW9ue1xyXG4gICBcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBib3JkZXI6ICNmNGY4ZjQ7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA1NiwgMjUyLCAwLjI4MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG5cclxuLmVkdWNhdGlvbkdyaWR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwyMDBweCkgbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCg2MHB4LDIwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNjAwcHggMTAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiYjEgYjIgYjNcIlxyXG4gICAgXCJtYWluIG1haW4gbWFpblwiXHJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5FZHVjYXRpb25Gb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY29sb3I6ICNlNmVmZjU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uZXhwZXJpbmNlSGVhZGVyRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogIzQ2MDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5nMXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucm93e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIFxyXG59XHJcblxyXG4uYntcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4uYjF7XHJcbiAgICBncmlkLWFyZWE6IGIxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW1cclxufVxyXG5cclxuLmIye1xyXG4gICAgZ3JpZC1hcmVhOiBiMjtcclxufVxyXG5cclxuLmIze1xyXG4gICAgZ3JpZC1hcmVhOiBiMztcclxufVxyXG5cclxuLmltZzF7XHJcbiAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgd2lkdGg6NzAlO1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBtYXJnaW46IDJyZW07XHJcbiAgIGJvcmRlcjogcmdiKDIyNiwgMTUzLCAxNykgc29saWQgNXB4O1xyXG5cclxufVxyXG5cclxuLmltZzJ7XHJcbiAgICBncmlkLWFyZWE6IG1haW47XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuIFxyXG4gfVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLmRlZ3JlZUluZm97XHJcbiAgICBncmlkLWFyZWE6IGZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5leHBlcmluY2Uwe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywxMDBweCkgbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLDEwMHB4KSBtaW5tYXgoYXV0bywxMDBweCkgbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLDEwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KGF1dG8sYXV0bykgMTAwcHggMjAwcHggbWlubWF4KGF1dG8sMjAwcHgpIG1pbm1heChhdXRvLDIwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJiNCBiNSBiNiBiNyBiOCBiOVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIGNvbXBhbnkgY29tcGFueSBjb21wYW55IGNvbXBhbnkgY29tcGFueVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXCJcclxuICAgIFwiY29tcGFueUxvZ28gcm9sZSByb2xlIHJvbGUgcm9sZSByb2xlXCJcclxuICAgIFwiY29tcGFueUxvZ28gZW1wdHk0IHByZXZCdG4gbmV4dEJ0biBlbXB0eTUgZW1wdHk1XCJcclxuICAgIFwiZW1wdHkgZW1wdHkgbWFpbiBtYWluIG1haW4gbWFpblwiXHJcbiAgICBcImZvb3RlciBmb290ZXIgbWFpbiBtYWluIG1haW4gbWFpblwiO1xyXG4gIFxyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmV4cGVyaW5jZXtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICBib3JkZXI6ICNmNGY4ZjQ7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA1NiwgMjUyLCAwLjI4MSk7XHJcblxyXG59XHJcblxyXG4uYjR7XHJcbiAgICBncmlkLWFyZWE6IGI0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5iNXtcclxuICAgIGdyaWQtYXJlYTogYjU7XHJcbn1cclxuXHJcbi5iNntcclxuICAgIGdyaWQtYXJlYTogYjY7XHJcbn1cclxuXHJcbi5iN3tcclxuICAgIGdyaWQtYXJlYTogYjc7XHJcbn1cclxuXHJcbi5iOHtcclxuICAgIGdyaWQtYXJlYTogYjg7XHJcbn1cclxuXHJcbi5iOXtcclxuICAgIGdyaWQtYXJlYTogYjk7XHJcbn1cclxuXHJcbi5jb21wYW55TG9nb3tcclxuICAgIGdyaWQtYXJlYTogY29tcGFueUxvZ287XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG59XHJcblxyXG4uaW1nMntcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgXHJcbiAgICBib3JkZXI6IHJnYigyMjYsIDE1MywgMTcpIHNvbGlkIDVweDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMzdweDtcclxuIFxyXG4gfVxyXG5cclxuIC5jb21wYW55e1xyXG4gICAgIGdyaWQtYXJlYTogY29tcGFueTtcclxuICAgICBjb2xvcjogcmdiKDI0MCwgMjQxLCAyNDUpO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgIFxyXG4gfVxyXG5cclxuIFxyXG5cclxuIC5leHBlcmluY2Ugc3BhbntcclxuICAgICBjb2xvcjogcmdiKDQxLCAyNDcsIDM0KTtcclxuIH1cclxuXHJcbiAudGl0bGV7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDI0MywgMjQ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICBcclxufVxyXG5cclxuLnJvbGV7XHJcbiAgICBncmlkLWFyZWE6IHJvbGU7XHJcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNTApO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgIFxyXG4gICBcclxufVxyXG5cclxuLm5leHRCdG57XHJcbiAgICBncmlkLWFyZWE6IG5leHRCdG47XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcbi5wcmV2QnRue1xyXG4gICAgZ3JpZC1hcmVhOiBwcmV2QnRuO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2tpbGxze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwcHgsMTAwcHgpIG1pbm1heCg0MHB4LDEwMHB4KSBtaW5tYXgoNDBweCwxMDBweCkgbWlubWF4KDYwcHgsMTAwcHgpIG1pbm1heCg2MHB4LDFmcikgbWlubWF4KDEyMHB4LDFmcik7ICovXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMTAwcHggMTAwcHggMTAwcHggcmVwZWF0KDEwLGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSxhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJlIGI5IGIxMCBiMTEgZTEgZTEgZTEgZTEgZTEgZTEgZTEgZTEgZTEgZTFcIlxyXG4gICAgXCJ0MSB0MSB0MSB0MSB0MSBlMiBlMiBlMiBlMiBlMiBlMiBlMiBlMiBlMlwiXHJcbiAgICBcInQyIHQyIHQyIHQyIHQyIGU0IGU0IGU0IGU0IGU0IGU0IGU0IGU0IGU0XCJcclxuICAgIFwidDMgdDMgdDMgdDMgdDMgZTYgZTYgZTYgZTYgZTYgZTYgZTYgZTYgZTZcIlxyXG4gICAgXCJ0NCB0NCB0NCB0NCB0NCBlOCBlOCBlOCBlOCBlOCBlOCBlOCBlOCBlOFwiO1xyXG4gICBcclxuICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2tpbGxzIHNwYW57XHJcbiAgICBmb250LXNpemU6eHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5iOXtcclxuICAgIGdyaWQtYXJlYTogYjk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjZzO1xyXG59XHJcblxyXG4uYjk6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjMzLCAyMjQsIDIyNCk7XHJcbiAgICBcclxufVxyXG5cclxuLmI5OmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjMxLCAyMjIsIDI0MCkgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLmIxMHtcclxuICAgIGdyaWQtYXJlYTogYjEwO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmIxMDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IHJnYigyMzgsIDIzNCwgMjM0KTtcclxuICAgIFxyXG59XHJcblxyXG4uYjEwOmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjM4LCAyMzQsIDI0MSkgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLmIxMXtcclxuICAgIGdyaWQtYXJlYTogYjExO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmIxMTpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDcsIDI0NSwgMjQ1KTtcclxuICAgIFxyXG59XHJcblxyXG4uYjExOmhvdmVye1xyXG4gICAgYm9yZGVyOiByZ2IoMjQ5LCAyNDYsIDI1MikgNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxufVxyXG5cclxuLnQxe1xyXG4gICAgZ3JpZC1hcmVhOiB0MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBcclxufVxyXG5cclxuLnQye1xyXG4gICAgZ3JpZC1hcmVhOiB0MjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIFxyXG59XHJcblxyXG4udDN7XHJcbiAgICBncmlkLWFyZWE6IHQzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgIFxyXG59XHJcblxyXG4udDR7XHJcbiAgICBncmlkLWFyZWE6IHQ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgXHJcbn1cclxuXHJcbi5pbnRlcmVzdHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW5tYXgoYXV0bywyMDBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IHJlcGVhdCg0LGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImUgZSBlIGVcIlxyXG4gICAgXCJlMSBpbnRlcmVzdDFUaXRsZSBpbnRlcmVzdDFUaXRsZSBpbnRlcmVzdDFUaXRsZVwiXHJcbiAgICBcImUyIGludGVyZXN0SW1hZ2UgaW50ZXJlc3RJbWFnZSBpbnRlcmVzdEltYWdlXCJcclxuICAgIFwiZTMgaW50ZXJlc3QxVGV4dCBpbnRlcmVzdDFUZXh0IGludGVyZXN0MVRleHRcIlxyXG4gICAgXCJlNCBpbnRlcmVzdFByZXZCdG4gZTUgaW50ZXJlc3ROZXh0QnRuXCI7XHJcbiAgXHJcbn1cclxuXHJcbi5pbnRlcmVzdDFUaXRsZXtcclxuICAgIGdyaWQtYXJlYTogaW50ZXJlc3QxVGl0bGU7XHJcbn1cclxuXHJcbi5pbnRlcmVzdEltYWdle1xyXG4gICAgZ3JpZC1hcmVhOiBpbnRlcmVzdEltYWdlO1xyXG59XHJcblxyXG4uaW50ZXJlc3QxVGV4dHtcclxuICAgIGdyaWQtYXJlYTogaW50ZXJlc3QxVGV4dDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgMjQ0LCAyNDQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnRlcmVzdE5leHRCdG57XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0TmV4dEJ0bjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5pbnRlcmVzdFByZXZCdG57XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0UHJldkJ0bjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcblxyXG4uY29udGFjdHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LG1pbm1heChhdXRvLDIwMHB4KSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggcmVwZWF0KDQsYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiZSBlIGUgZVwiXHJcbiAgICBcImUxIGNvbnRhY3QxIGNvbnRhY3QxIGNvbnRhY3QxXCJcclxuICAgIFwiZTIgZTIgZTIgZTJcIlxyXG4gICAgXCJlMyBjb250YWN0MiBjb250YWN0MiBjb250YWN0MlwiXHJcbiAgICBcImU0IGU0IGU0IGU0XCI7XHJcbn1cclxuXHJcbi5jb250YWN0MXtcclxuICAgIGdyaWQtYXJlYTogY29udGFjdDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3Qye1xyXG4gICAgZ3JpZC1hcmVhOiBjb250YWN0MjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

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



let AppComponent = class AppComponent {
    constructor(siteService) {
        // this.siteService.GetDateTimeInfo();
        this.siteService = siteService;
        this.title = 'kamparsen-site';
        this.camoziImages = ["../assets/i4.JPG", "../assets/i5.JPG", "../assets/i6.JPG", "../assets/i7.JPG", "../assets/i8.JPG", "../assets/i9.JPG"];
        this.espnImages = ["../assets/i11.PNG", "../assets/i12.PNG"];
        this.raytheonImages = ["../assets/sigma.JPG", "../assets/i10.JPG"];
        this.novaImages = ["../assets/nova.PNG", "../assets/1.JPG", "../assets/2.JPG", "../assets/3.JPG", "../assets/cfft-1.PNG", "../assets/cfft-2.PNG", "../assets/cfft-3.PNG"];
        this.interestImages = ["../assets/i20.JPG", "../assets/i21.JPG", "../assets/i22.JPG", "../assets/i23.JPG"];
        this.githubImage = "../assets/github.PNG";
        this.bsImage = "../assets/i2.JPG";
        this.allMonth = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    ngOnInit() {
        this.currentDate = new Date().toDateString();
        this.siteService.GetWeatherInfo();
        this.interestText = '';
        this.interestTitle = '';
        this.hideAllExperinces();
        this.hideAllInterests();
        this.hideAllSkills();
        this.currentCamozziImageIndex = 0;
        this.currentEspnImageIndex = 0;
        this.currentNovaImageIndex = 0;
        this.currentInterestImageIndex = 0;
        this.currentRaytheonImageIndex = 0;
        this.siteService.weatherModel.subscribe(weatherData => {
            this.currentTemp = Math.floor(this.ConvertKelvinToFarenhite(weatherData.main.temp));
        });
        this.loadAbout();
    }
    ConvertKelvinToFarenhite(params) {
        return (params - 273.15) * 1.8 + 32;
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
    }
    Show2008() {
        this.hideAllExperinces();
        this.show2008 = true;
        this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];
        this.company = "Raytheon";
        this.companyLogo = "../assets/raytheonLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    }
    Show2010() {
        this.hideAllExperinces();
        this.show2010 = true;
        this.espnImage = this.espnImages[this.currentEspnImageIndex];
        this.company = "ESPN";
        this.companyLogo = "../assets/espnLogo.png";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Design and Impelemenation of Mission Managment System ";
    }
    Show2013() {
        this.hideAllExperinces();
        this.show2013 = true;
        this.novaImage = this.novaImages[this.currentNovaImageIndex];
        this.company = "Nova Techhologies";
        this.companyLogo = "../assets/novaLogo.jpg";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";
    }
    ShowGithub() {
        this.hideAllExperinces();
        this.showGithub = true;
        this.githubImage = this.githubImage;
        this.company = "Github";
        this.companyLogo = "../assets/GitHubLogo.PNG";
        this.jobtitle = "Software Engineer";
        this.responsibalities = "Software Design and Impelemenation , CALL FOR FIRE (CFFT III) Trainer";
    }
    prevImage() {
        if (this.show1999) {
            this.currentCamozziImageIndex--;
            if (this.currentCamozziImageIndex <= 0)
                this.currentCamozziImageIndex = 5;
            this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
        }
        if (this.show2008) {
            this.currentRaytheonImageIndex--;
            if (this.currentRaytheonImageIndex <= 0)
                this.currentRaytheonImageIndex = 1;
            else
                this.currentRaytheonImageIndex = 0;
            this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];
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
    }
    nextImage() {
        if (this.show1999) {
            this.currentCamozziImageIndex++;
            if (this.currentCamozziImageIndex > 5)
                this.currentCamozziImageIndex = 0;
            this.camozziImage = this.camoziImages[this.currentCamozziImageIndex];
        }
        if (this.show2008) {
            this.currentRaytheonImageIndex++;
            if (this.currentRaytheonImageIndex > 1)
                this.currentRaytheonImageIndex = 0;
            this.raytheonImage = this.raytheonImages[this.currentRaytheonImageIndex];
        }
        if (this.show2010) {
            this.currentEspnImageIndex++;
            if (this.currentEspnImageIndex > 1)
                this.currentEspnImageIndex = 0;
            this.espnImage = this.espnImages[this.currentEspnImageIndex];
        }
        if (this.show2013) {
            this.currentNovaImageIndex++;
            if (this.currentNovaImageIndex > 7)
                this.currentNovaImageIndex = 0;
            this.novaImage = this.novaImages[this.currentNovaImageIndex];
        }
    }
    nextInterestImage() {
        if (this.showInterest1) {
            this.showInterest1 = false;
            this.showInterest2 = true;
            return;
        }
        if (this.showInterest2) {
            this.showInterest2 = false;
            this.showInterest3 = true;
            return;
        }
        if (this.showInterest3) {
            this.showInterest3 = false;
            this.showInterest4 = true;
            return;
        }
        if (this.showInterest4) {
            this.showInterest4 = false;
            this.showInterest5 = true;
            return;
        }
        if (this.showInterest5) {
            this.showInterest5 = false;
            this.showInterest1 = true;
            return;
        }
    }
    prevInterestImage() {
        if (this.showInterest1) {
            this.showInterest1 = false;
            this.showInterest5 = true;
            return;
        }
        if (this.showInterest2) {
            this.showInterest2 = false;
            this.showInterest1 = true;
            return;
        }
        if (this.showInterest3) {
            this.showInterest3 = false;
            this.showInterest2 = true;
            return;
        }
        if (this.showInterest4) {
            this.showInterest4 = false;
            this.showInterest3 = true;
            return;
        }
        if (this.showInterest5) {
            this.showInterest5 = false;
            this.showInterest4 = true;
            return;
        }
    }
    loadAbout() {
        this.hideAllSections();
        this.showAbout = true;
    }
    loadEducation() {
        this.hideAllSections();
        this.showEducation = true;
        this.bsImage = "../assets/i2.JPG";
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
        this.hideAllInterests();
        this.showInterests = true;
        this.showInterest1 = true;
    }
    loadContact() {
        this.hideAllSections();
        this.showContact = true;
    }
    hideAllInterests() {
        this.showInterest1 = false;
        this.showInterest2 = false;
        this.showInterest3 = false;
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
        this.show2013 = false;
        this.showGithub = false;
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]
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
        // this.http.get<DateTimeModel>('http://worldclockapi.com/api/json/est/now').subscribe(
        //     data=>{this.timeDateModel.next(data);
        //     console.log(data.currentDateTime);
        //     });
        // this.http.get<DateTimeModel>('https://timezonedb.p.rapidapi.com/?zone=America%2FLos_Angeles&time=1358474681&lat=34.048108&lng=-118.244705&format=xml').subscribe(
        //     data=>{this.timeDateModel.next(data);
        //     console.log(data.currentDateTime);
        //     });
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