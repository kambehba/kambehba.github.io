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

module.exports = "<div class=\"container\">\r\n\r\n    <aside>\r\n        <br>\r\n        <p class=\"date\">Today is {{currentDate}}\r\n            <br><br><span> Orlando Florida</span> <br><br>\r\n            <span> Temp: {{currentTemp}} F</span> </p>\r\n        <img class=\"myPhoto\" src=\"../assets/kamparsen.jpg\" alt=\"Italian Trulli\">\r\n        <nav class=\"nav\">\r\n            <div *ngIf=\"showNav\">\r\n                <button class=\"navBtn btn-success\" (click)=\"loadAbout()\">About</button> <br />\r\n                <button class=\"navBtn btn-success\" (click)=\"loadEducation()\">Education</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"loadExperience()\">Experience</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"loadSkills()\">Skills</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"loadInterests()\">Interests</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"loadContact()\">Contact</button> <br />\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showNav2\">\r\n                <button class=\"btn-danger backBtn\" (click)=\"back('ed')\">Back</button><br />\r\n                <button class=\"navBtn btn-success\" [ngClass]=\"{ 'btn-clicked': buttonClicked, 'btn-notClicked' :  !buttonClicked}\"  (click)=\"showEducation('m')\">Master</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"showEducation('b')\">Bachelor</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"showEducation('c')\">Certificates</button><br /><br /><br />\r\n            </div>\r\n\r\n            <div *ngIf=\"showNav3\">\r\n                <button class=\"btn-danger backBtn\" (click)=\"back('ex')\">Back</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"ShowExperince('e1')\">2013-present</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"ShowExperince('e2')\">2010-2013</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"ShowExperince('e3')\">2008-2010</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"ShowExperince('e4')\">2002-2004</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"ShowExperince('e5')\">1999-2002</button><br /><br /><br />\r\n            </div>\r\n\r\n            <div *ngIf=\"showNav4\">\r\n                <button class=\"btn-danger backBtn\" (click)=\"back('sk')\">Back</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showskill('s1')\">Desktop</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showskill('s2')\">Web</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showskill('s3')\">Embeded Systems</button><br />\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showNav5\">\r\n                <button class=\"btn-danger backBtn\" (click)=\"back('in')\">Back</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showinterest('i1')\">AI</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showinterest('i2')\">Full Stack</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showinterest('i3')\">IoT</button><br />\r\n                <button class=\"navBtn btn-success\" (click)=\"Showinterest('i4')\">Algorithems</button><br />\r\n\r\n            </div>\r\n        </nav>\r\n    </aside>\r\n\r\n    <main>\r\n        <section class=\"main-area\">\r\n\r\n            <!-- about starts -->\r\n            <section class=\"about\" *ngIf=\"showAbout\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Kam\r\n                        <span class=\"text-success\">Parsen</span>\r\n                    </h1>\r\n                </header>\r\n                <article class=\"aboutText\">\r\n                    Thank you for visiting my site! <br /><br />\r\n                    I am a problem solver who does Engineering not only\r\n                    to make a living but also as a passion and hobby. <br /><br />\r\n                    I started my carrier back in 1999 by falling in love with Automation and Programming PLCs. <br />\r\n                    Since then I have worked on variety of projects from Embedded systems to Desktop and Web\r\n                    Application. <br /><br />\r\n                    Readability and Scalability are the two main factor for me when I am writing Software or Firmware.\r\n                </article>\r\n            </section>\r\n            <!-- about ends -->\r\n\r\n            <!-- education starts -->\r\n            <div *ngIf=\"showEducationMaster\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Purdue\r\n                        <span class=\"text-success\">Univeristy</span>\r\n                    </h1>\r\n                </header>\r\n                <p class=\"EducationFont\">Master Degree - Software Engineering 2009 - 2010</p>\r\n                <img class=\"img2\" src=\"../assets/i1.JPG\">\r\n            </div>\r\n\r\n            <div *ngIf=\"showEducationBachelor\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Purdue\r\n                        <span class=\"text-success\">Univeristy</span>\r\n                    </h1>\r\n                </header>\r\n                <p class=\"EducationFont\">Bachelor of Science in Computer Engineering - 2005-2009</p>\r\n                <img class=\"img2\" src=\"../assets/i2.JPG\">\r\n            </div>\r\n\r\n            <div *ngIf=\"showEducationCertificate\">\r\n                <header>\r\n                    <h1 class=\"display-3 text-uppercase\">Purdue\r\n                        <span class=\"text-success\">Univeristy</span>\r\n                    </h1>\r\n                </header>\r\n                <p class=\"EducationFont\">Winner of Best Sceinor Design 2009 </p>\r\n                <img class=\"img2\" src=\"../assets/i3.JPG\">\r\n            </div>\r\n\r\n            <!-- experince starts -->\r\n\r\n            <div *ngIf=\"showExperince1\">\r\n                <img class=\"img1\" src=\"../assets/novaLogo.jpg\">\r\n                <div class=\"experinceHeaderFont\">Nova Technologies , Orlando FL , 2013- present</div>\r\n                <div class=\"experinceHeaderFont\">Title: Software Engineer </div>\r\n                <p class=\"EducationFont\">\r\n                    Design and Development of the next Generation of Call for Fire Trainers.<br /><br />\r\n                    CFFT III is a Trainer/Simulator Environment designed to Train Joint Fire Observers. <br />\r\n                    Simulates War Enviroment in a very cost-effective way .<br /><br />\r\n                    Developed in WPF Framework with Prism Modules , highley scalable.<br />\r\n                    I have been responsible for the Design and Development of multiple Featuers. <br />\r\n\r\n                    To name a few modules I worked on : Indirect Fire , Precision Strike, Message Center , Naval\r\n                    Fire\r\n                </p>\r\n\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"showExperince2\">\r\n                <img class=\"img1\" src=\"../assets/espnLogo.png\">\r\n                <div class=\"experinceHeaderFont\">Altura Tech-ESPN , Orlando FL , 2010- 2013</div>\r\n                <div class=\"experinceHeaderFont\">Title: Software Engineer</div>\r\n                <p class=\"EducationFont\">\r\n                    Sports Statestics Software , Design and Development for ESPN network.<br />\r\n                    Distributed sytem with WPF front End and WCF middleware and SQL database<br />\r\n                </p>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showExperince3\">\r\n                <img class=\"img1\" src=\"../assets/raytheonLogo.jpg\">\r\n                <div class=\"experinceHeaderFont\">Software Engineer , 2008- 2010</div>\r\n                <p class=\"EducationFont\">\r\n                    Worked within a large group of Engineers. <br />\r\n                    As a Software Engineer. I was involved in Full cycle of water fall Software Development\r\n                    process.<br />\r\n                    Requirment , Design and Implementation for Mission Planner System for V-22 Aircraft<br />\r\n                </p>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showExperince4\">\r\n                <img class=\"img1\" src=\"../assets/honeywellLogo.png\">\r\n                <div class=\"experinceHeaderFont\">Electrical Engineer , 2002- 2004</div>\r\n                <p class=\"EducationFont\">\r\n                    Worked within a small team of Engineers.<br />\r\n                    BMS system Design , implementation and install in site<br />\r\n                    for two hospital and one residential building.adaddfgdfgdf\r\n                </p>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showExperince5\">\r\n                <img class=\"img1\" src=\"../assets/companyLogo.png\">\r\n                <div class=\"experinceHeaderFont\">Electrical Engineer , 1999- 2002</div>\r\n                <p class=\"EducationFont\">\r\n                    Electrical Panel design , PLC programming , Robotics and Automation.\r\n                </p>\r\n\r\n            </div>\r\n\r\n\r\n            <!-- skills starts -->\r\n\r\n            <div class=\"skills\" *ngIf=\"showSkill1\">\r\n                <header class=\"t1\">\r\n                    <h2 class=\"display-6 text-uppercase text-success\">Programming Languages: <span\r\n                            class=\"display-6 text-uppercase text-white\"> C , C++ , C# </span></h2>\r\n                </header>\r\n\r\n                <header class=\"t2\">\r\n                    <h2 class=\"display-6 text-uppercase text-success\">Markup Languages: <span\r\n                            class=\"display-6 text-uppercase text-white\">XAML , XML</span></h2>\r\n                </header>\r\n\r\n                <header class=\"t3\">\r\n                    <h2 class=\"display-6 text-uppercase text-success\">Frameworks , Libraries: <span\r\n                            class=\"display-6 text-uppercase text-white\">.NET WPF , WCF , PRISM</span></h2>\r\n                </header>\r\n\r\n                <header class=\"t4\">\r\n                    <h2 class=\"display-6 text-uppercase text-success\">Design Patterns: <span\r\n                            class=\"display-6 text-uppercase text-white\">MVVM , Dependency Injection , Command</span>\r\n                    </h2>\r\n                </header>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"skills\" *ngIf=\"showSkill2\">\r\n                <header class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Client Side: <span\r\n                            class=\"display-3 text-uppercase text-white\"> AngularJs , HTML , CSS , Bootstrap ,<br />\r\n                            Visual Studio Code</span></h2>\r\n                </header>\r\n\r\n                <header class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Server Side: <span\r\n                            class=\"display-3 text-uppercase text-white\">NodeJS , Express ,RESTfull Services ,\r\n                            Javascript</span></h2>\r\n                </header>\r\n\r\n                <header class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Database: <span\r\n                            class=\"display-3 text-uppercase text-white\">Mongo DB , Firebase Database</span></h2>\r\n                </header>\r\n\r\n            </div>\r\n\r\n            <div class=\"skills\" *ngIf=\"showSkill3\">\r\n                <header class=\"t1\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">PLC: <span\r\n                            class=\"display-3 text-uppercase text-white\"> Allen\r\n                            Bradlley , Siemens S7 , Omron\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header class=\"t2\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Microcontrollers: <span\r\n                            class=\"display-3 text-uppercase text-white\"> ESP8266 , Arduino ,PIC and Rasberry PI\r\n                            <br /></span></h2>\r\n                </header>\r\n\r\n                <header class=\"t3\">\r\n                    <h2 class=\"display-5 text-uppercase text-success\">Fimware: <span\r\n                            class=\"display-3 text-uppercase text-white\"> C\r\n                            , and Assembely</span></h2>\r\n                </header>\r\n\r\n            </div>\r\n            <!-- skills ends -->\r\n\r\n\r\n            <!-- interests -->\r\n\r\n            <div *ngIf=\"showInterest1\">\r\n                <header class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Arteficial Intellegence</h2>\r\n                </header>\r\n                <img class=\"interestImage\" src=\"../assets/i20.JPG\">\r\n                <article class=\"interest1Text\">I like to Interface with AI to create next\r\n                    generation of Apps</article>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showInterest2\">\r\n                <header class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Full Stack Development </h2>\r\n                </header>\r\n                <img class=\"interestImage\" src=\"../assets/i21.JPG\">\r\n                <article class=\"interest1Text\">Like to use NodeJs as my backend RESTfull API and\r\n                    AngularJs for my front End </article>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showInterest3\">\r\n                <header class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Algorithems and Data Structuer</h2>\r\n                </header>\r\n                <img class=\"interestImage\" src=\"../assets/i22.JPG\">\r\n                <article class=\"interest1Text\">Writing Efficient Algorithems to solve problems is\r\n                    my passion. </article>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"showInterest4\">\r\n                <header class=\"interest1Title\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">IoT - Interet of Things</h2>\r\n                </header>\r\n                <img class=\"interestImage\" src=\"../assets/iot.JPG\">\r\n                <article class=\"interest1Text\">I have done multiple IoT projects and like to\r\n                    expand my skills on this area.<br /></article>\r\n\r\n            </div>\r\n\r\n            <!-- interests ends -->\r\n\r\n            <!-- contact -->\r\n\r\n\r\n            <div *ngIf=\"showContact\">\r\n                <header class=\"contact1\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Email : Kamparsen@yahoo.com</h2>\r\n                </header>\r\n\r\n                <header class=\"contact2\">\r\n                    <h2 class=\"display-5 text-uppercase text-warning\">Cell : 407.455.2707</h2>\r\n                </header>\r\n\r\n\r\n            </div>\r\n\r\n            <!-- contacts ends -->\r\n\r\n\r\n\r\n\r\n\r\n        </section>\r\n        <!-- main area ends -->\r\n\r\n    </main>\r\n\r\n\r\n\r\n</div>"

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

module.exports = "\r\n *{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n  } \r\n\r\n.container{\r\n   \r\n    display: grid;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n} \r\n\r\n.m1{\r\n    background: rebeccapurple;\r\n    width: 60px;\r\n    margin: 1rem;\r\n} \r\n\r\naside{\r\n    display: grid;\r\n    grid-column: 1;\r\n    align-content: center;\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 300px;\r\n    background: #a8c0ff;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n} \r\n\r\n.date{\r\n    color: rgb(247, 243, 236);\r\n    align-content:center;\r\n    margin-bottom: 1rem;\r\n    margin-left: 1rem;\r\n    font-size: large;\r\n\r\n} \r\n\r\n.backBtn{\r\n    width: 65px;\r\n    height: 30px;\r\n\r\n} \r\n\r\n.myPhoto{\r\n    width: 70%;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    border: 2px solid wheat;\r\n    box-shadow: 0 10px 20px rgb(54, 52, 52)\r\n} \r\n\r\n.nav{\r\n    display: grid;\r\n    justify-items: center;\r\n    margin-top: 2rem;\r\n\r\n} \r\n\r\n.nav button{\r\n    font-size: 110%;\r\n    color: wheat;\r\n    margin-bottom: 1rem;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.nav button:hover{\r\n    text-decoration: none;\r\n    -webkit-transform: scale(1.4);\r\n            transform: scale(1.4);\r\n} \r\n\r\n.btn-clicked{\r\n   border: gold;\r\n   border-style: groove;\r\n} \r\n\r\n.btn-notClicked{\r\n    border: none;\r\n    border-style: unset;\r\n} \r\n\r\nmain{\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n   \r\n} \r\n\r\n.navBtn{\r\n    width: 150px;\r\n    height: 30px; \r\n} \r\n\r\n.main-area{\r\n    grid-column: 2/3;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);\r\n} \r\n\r\n.about{\r\n    display: grid;\r\n    align-content: center;\r\n    height: 100vh;\r\n    margin-left: 2rem;\r\n\r\n} \r\n\r\n.aboutText{\r\n    margin: 2rem;\r\n    font-size: xx-large;\r\n    color: #ecedf0;\r\n    align-self: center;\r\n    width: 700px;\r\n} \r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  } \r\n\r\n.sidenav a, .dropdown-btn {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #818181;\r\n    display: block;\r\n    border: none;\r\n    background: none;\r\n    width: 100%;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    outline: none;\r\n  } \r\n\r\n/* On mouse-over */ \r\n\r\n.sidenav a:hover, .dropdown-btn:hover {\r\n    color: #f1f1f1;\r\n  } \r\n\r\n.education{\r\n   \r\n    width: 900px;\r\n    height: 750px;\r\n    margin-left: 2rem;\r\n    margin-top: 4rem;\r\n    border: #f4f8f4;\r\n    overflow: scroll;\r\n    border-style: groove;\r\n    background: rgba(42, 56, 252, 0.281);\r\n    border-radius: .2rem;\r\n} \r\n\r\n.educationGrid{\r\n    display: grid;\r\n    grid-template-columns: minmax(60px,200px) minmax(60px,200px) minmax(60px,200px);\r\n    grid-template-rows: 100px 600px 100px;\r\n    grid-template-areas: \r\n    \"b1 b2 b3\"\r\n    \"main main main\"\r\n    \"footer footer footer\";\r\n    grid-column-gap: 1rem;\r\n} \r\n\r\n.EducationFont{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: larger;\r\n    color: #e6eff5;\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.experinceHeaderFont{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: x-large;\r\n    color: #460000;\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.g1{\r\n    width: 400px;\r\n    grid-row: 2;\r\n    align-content: center;\r\n} \r\n\r\n.skills{\r\n    margin: 2rem;\r\n} \r\n\r\n.buttonrow{\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-row: 1;\r\n    \r\n} \r\n\r\n.b{\r\n    margin-top: 2rem;\r\n    height: 30px;\r\n   \r\n} \r\n\r\n.b1{\r\n    grid-area: b1;\r\n    margin-left: 1rem\r\n} \r\n\r\n.b2{\r\n    grid-area: b2;\r\n} \r\n\r\n.b3{\r\n    grid-area: b3;\r\n} \r\n\r\n.img1{\r\n   \r\n   width:400px;\r\n   height: 200px;\r\n   margin-top: 1rem;\r\n   margin-left: 2rem;\r\n   margin: 2rem;\r\n   border: rgb(226, 153, 17) solid 5px;\r\n\r\n} \r\n\r\n.img2{\r\n    width: 50%;\r\n    height: 40%;\r\n  \r\n    margin-top: 1rem;\r\n    margin-left: 2rem;\r\n    margin: 2rem;\r\n    border: rgb(226, 153, 17) solid 5px;\r\n \r\n } \r\n\r\n.divider{\r\n   \r\n    color: white;\r\n    border-width: 4px;\r\n    border-style: inset;\r\n    display: block;\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n} \r\n\r\n.degreeInfo{\r\n    grid-area: ff;\r\n    width: 100%;\r\n    height: auto;\r\n} \r\n\r\n.experince0{\r\n    display: grid;\r\n    margin-left: 2rem;\r\n    grid-template-columns: minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px) minmax(auto,100px);\r\n    grid-template-rows: minmax(40px,auto) minmax(40px,auto) minmax(40px,auto) minmax(auto,auto) 100px 200px minmax(auto,200px) minmax(auto,200px);\r\n    grid-template-areas: \r\n    \"b4 b5 b6 b7 b8 b9\"\r\n    \"companyLogo company company company company company\"\r\n    \"companyLogo title title title title title\"\r\n    \"companyLogo role role role role role\"\r\n    \"companyLogo empty4 prevBtn nextBtn empty5 empty5\"\r\n    \"empty empty main main main main\"\r\n    \"footer footer main main main main\";\r\n  \r\n    grid-column-gap: 1rem;\r\n    height: 100vh;\r\n} \r\n\r\n.experince{\r\n    width: 900px;\r\n    height: 800px;\r\n    margin-left: 2rem;\r\n    margin-top: 6rem;\r\n    border: #f4f8f4;\r\n    overflow: scroll;\r\n    border-style: groove;\r\n    background: rgba(42, 56, 252, 0.281);\r\n\r\n} \r\n\r\n.b4{\r\n    grid-area: b4;\r\n    margin-left: 1rem;\r\n} \r\n\r\n.b5{\r\n    grid-area: b5;\r\n} \r\n\r\n.b6{\r\n    grid-area: b6;\r\n} \r\n\r\n.b7{\r\n    grid-area: b7;\r\n} \r\n\r\n.b8{\r\n    grid-area: b8;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n} \r\n\r\n.companyLogo{\r\n    grid-area: companyLogo;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 2rem;\r\n\r\n} \r\n\r\n.company{\r\n     grid-area: company;\r\n     color: rgb(240, 241, 245);\r\n     font-weight: bold;\r\n     width: 100%;\r\n     margin-left: 2rem;\r\n     margin-top: 2rem;\r\n   \r\n } \r\n\r\n.experince span{\r\n     color: rgb(41, 247, 34);\r\n } \r\n\r\n.title{\r\n    grid-area: title;\r\n    color: rgb(243, 243, 247);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n} \r\n\r\n.role{\r\n    grid-area: role;\r\n    color: rgb(249, 249, 250);\r\n    font-weight: bold;\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n   \r\n   \r\n} \r\n\r\n.nextBtn{\r\n    grid-area: nextBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 4rem;\r\n    margin-left: 2rem;\r\n    \r\n   \r\n} \r\n\r\n.prevBtn{\r\n    grid-area: prevBtn;\r\n    width: 70px;\r\n    height: 30px;\r\n    z-index: 5;\r\n    margin-top: 4rem;\r\n    margin-left: 2rem;\r\n} \r\n\r\n.skills{\r\n    display: grid;\r\n    /* grid-template-columns: minmax(60px,100px) minmax(40px,100px) minmax(40px,100px) minmax(60px,100px) minmax(60px,1fr) minmax(120px,1fr); */\r\n    grid-template-columns: 30px 100px 100px 100px repeat(10,auto);\r\n    grid-template-rows: repeat(9,auto);\r\n    grid-template-areas: \r\n    \"e b9 b10 b11 e1 e1 e1 e1 e1 e1 e1 e1 e1 e1\"\r\n    \"t1 t1 t1 t1 t1 e2 e2 e2 e2 e2 e2 e2 e2 e2\"\r\n    \"t2 t2 t2 t2 t2 e4 e4 e4 e4 e4 e4 e4 e4 e4\"\r\n    \"t3 t3 t3 t3 t3 e6 e6 e6 e6 e6 e6 e6 e6 e6\"\r\n    \"t4 t4 t4 t4 t4 e8 e8 e8 e8 e8 e8 e8 e8 e8\";\r\n   \r\n   \r\n    height: 100vh;\r\n} \r\n\r\n.skills span{\r\n    font-size:xx-large;\r\n} \r\n\r\n.b9{\r\n    grid-area: b9;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b9:focus{\r\n    box-shadow: rgb(233, 224, 224);\r\n    \r\n} \r\n\r\n.b9:hover{\r\n    border: rgb(231, 222, 240) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b10{\r\n    grid-area: b10;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b10:focus{\r\n    box-shadow: rgb(238, 234, 234);\r\n    \r\n} \r\n\r\n.b10:hover{\r\n    border: rgb(238, 234, 241) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.b11{\r\n    grid-area: b11;\r\n    transition:all 0.6s;\r\n} \r\n\r\n.b11:focus{\r\n    box-shadow: rgb(247, 245, 245);\r\n    \r\n} \r\n\r\n.b11:hover{\r\n    border: rgb(249, 246, 252) 4px solid;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n\r\n} \r\n\r\n.t1{\r\n    grid-area: t1;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t2{\r\n    grid-area: t2;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.t3{\r\n    grid-area: t3;\r\n    margin-left: 2rem;\r\n   \r\n} \r\n\r\n.t4{\r\n    grid-area: t4;\r\n    margin-left: 2rem;\r\n  \r\n} \r\n\r\n.interests{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,minmax(auto,200px));\r\n    grid-template-rows: 50px repeat(4,auto);\r\n    grid-template-areas: \r\n    \"e e e e\"\r\n    \"e1 interest1Title interest1Title interest1Title\"\r\n    \"e2 interestImage interestImage interestImage\"\r\n    \"e3 interest1Text interest1Text interest1Text\"\r\n    \"e4 interestPrevBtn e5 interestNextBtn\";\r\n  \r\n} \r\n\r\n.interest1Title{\r\n    grid-area: interest1Title;\r\n    margin: 2rem;\r\n} \r\n\r\n.interestImage{\r\n    grid-area: interestImage;\r\n    margin: 2rem;\r\n} \r\n\r\n.interest1Text{\r\n    grid-area: interest1Text;\r\n    font-size: large;\r\n    color: rgb(248, 244, 244);\r\n    font-weight: bold;\r\n    margin: 2rem;\r\n} \r\n\r\n.interestNextBtn{\r\n    grid-area: interestNextBtn;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.interestPrevBtn{\r\n    grid-area: interestPrevBtn;\r\n    margin-top: 2rem;\r\n} \r\n\r\n.contact{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,minmax(auto,200px));\r\n    grid-template-rows: 50px repeat(4,auto);\r\n    grid-template-areas: \r\n    \"e e e e\"\r\n    \"e1 contact1 contact1 contact1\"\r\n    \"e2 e2 e2 e2\"\r\n    \"e3 contact2 contact2 contact2\"\r\n    \"e4 e4 e4 e4\";\r\n} \r\n\r\n.contact1{\r\n    grid-area: contact1;\r\n    margin-bottom: 2rem;\r\n    margin-top: 3rem;\r\n    margin-left: 2rem;\r\n\r\n} \r\n\r\n.contact2{\r\n    grid-area: contact2;\r\n    margin-bottom: 2rem;\r\n    margin-top: 3rem;\r\n    margin-left: 2rem;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUY7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFNQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0FBRWxJOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0dBQ0csWUFBWTtHQUNaLG9CQUFvQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhOztJQUViLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIs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LHVDQUF1QztJQUN2Qzs7Ozs7MkNBS3VDOztBQUUzQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtJQUNuRCx1Q0FBdUM7SUFDdkM7Ozs7O2lCQUthO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0gXHJcblxyXG4uY29udGFpbmVye1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tMXtcclxuICAgIGJhY2tncm91bmQ6IHJlYmVjY2FwdXJwbGU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmFzaWRle1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNhOGMwZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNmMmI5NiwgI2E4YzBmZik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2YyYjk2LCAjYThjMGZmKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxufVxyXG5cclxuLmRhdGV7XHJcbiAgICBjb2xvcjogcmdiKDI0NywgMjQzLCAyMzYpO1xyXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG5cclxufVxyXG5cclxuLmJhY2tCdG57XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5teVBob3Rve1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hlYXQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2IoNTQsIDUyLCA1MilcclxufVxyXG5cclxuLm5hdntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxufVxyXG5cclxuLm5hdiBidXR0b257XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLm5hdiBidXR0b246aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbn1cclxuXHJcbi5idG4tY2xpY2tlZHtcclxuICAgYm9yZGVyOiBnb2xkO1xyXG4gICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxufVxyXG5cclxuLmJ0bi1ub3RDbGlja2Vke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXN0eWxlOiB1bnNldDtcclxufVxyXG5cclxubWFpbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcclxuICAgXHJcbn1cclxuXHJcbi5uYXZCdG57XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7IFxyXG59XHJcblxyXG4ubWFpbi1hcmVhe1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMGRlZywgIzJiNTg3NiAwJSwgIzRlNDM3NiAxMDAlKTtcclxufVxyXG5cclxuLmFib3V0e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5hYm91dFRleHR7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6ICNlY2VkZjA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYgYSwgLmRyb3Bkb3duLWJ0biB7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyICovXHJcbiAgLnNpZGVuYXYgYTpob3ZlciwgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuLmVkdWNhdGlvbntcclxuICAgXHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgYm9yZGVyOiAjZjRmOGY0O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MiwgNTYsIDI1MiwgMC4yODEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbn1cclxuXHJcbi5lZHVjYXRpb25Hcmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwcHgsMjAwcHgpIG1pbm1heCg2MHB4LDIwMHB4KSBtaW5tYXgoNjBweCwyMDBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDYwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImIxIGIyIGIzXCJcclxuICAgIFwibWFpbiBtYWluIG1haW5cIlxyXG4gICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uRWR1Y2F0aW9uRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiAjZTZlZmY1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmV4cGVyaW5jZUhlYWRlckZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgY29sb3I6ICM0NjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uZzF7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNraWxsc3tcclxuICAgIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnJvd3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBcclxufVxyXG5cclxuLmJ7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICBcclxufVxyXG5cclxuLmIxe1xyXG4gICAgZ3JpZC1hcmVhOiBiMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXHJcbn1cclxuXHJcbi5iMntcclxuICAgIGdyaWQtYXJlYTogYjI7XHJcbn1cclxuXHJcbi5iM3tcclxuICAgIGdyaWQtYXJlYTogYjM7XHJcbn1cclxuXHJcbi5pbWcxe1xyXG4gICBcclxuICAgd2lkdGg6NDAwcHg7XHJcbiAgIGhlaWdodDogMjAwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBtYXJnaW46IDJyZW07XHJcbiAgIGJvcmRlcjogcmdiKDIyNiwgMTUzLCAxNykgc29saWQgNXB4O1xyXG5cclxufVxyXG5cclxuLmltZzJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgXHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBib3JkZXI6IHJnYigyMjYsIDE1MywgMTcpIHNvbGlkIDVweDtcclxuIFxyXG4gfVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLmRlZ3JlZUluZm97XHJcbiAgICBncmlkLWFyZWE6IGZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5leHBlcmluY2Uwe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywxMDBweCkgbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLDEwMHB4KSBtaW5tYXgoYXV0bywxMDBweCkgbWlubWF4KGF1dG8sMTAwcHgpIG1pbm1heChhdXRvLDEwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KDQwcHgsYXV0bykgbWlubWF4KGF1dG8sYXV0bykgMTAwcHggMjAwcHggbWlubWF4KGF1dG8sMjAwcHgpIG1pbm1heChhdXRvLDIwMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJiNCBiNSBiNiBiNyBiOCBiOVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIGNvbXBhbnkgY29tcGFueSBjb21wYW55IGNvbXBhbnkgY29tcGFueVwiXHJcbiAgICBcImNvbXBhbnlMb2dvIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXCJcclxuICAgIFwiY29tcGFueUxvZ28gcm9sZSByb2xlIHJvbGUgcm9sZSByb2xlXCJcclxuICAgIFwiY29tcGFueUxvZ28gZW1wdHk0IHByZXZCdG4gbmV4dEJ0biBlbXB0eTUgZW1wdHk1XCJcclxuICAgIFwiZW1wdHkgZW1wdHkgbWFpbiBtYWluIG1haW4gbWFpblwiXHJcbiAgICBcImZvb3RlciBmb290ZXIgbWFpbiBtYWluIG1haW4gbWFpblwiO1xyXG4gIFxyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmV4cGVyaW5jZXtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICBib3JkZXI6ICNmNGY4ZjQ7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCA1NiwgMjUyLCAwLjI4MSk7XHJcblxyXG59XHJcblxyXG4uYjR7XHJcbiAgICBncmlkLWFyZWE6IGI0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5iNXtcclxuICAgIGdyaWQtYXJlYTogYjU7XHJcbn1cclxuXHJcbi5iNntcclxuICAgIGdyaWQtYXJlYTogYjY7XHJcbn1cclxuXHJcbi5iN3tcclxuICAgIGdyaWQtYXJlYTogYjc7XHJcbn1cclxuXHJcbi5iOHtcclxuICAgIGdyaWQtYXJlYTogYjg7XHJcbn1cclxuXHJcbi5iOXtcclxuICAgIGdyaWQtYXJlYTogYjk7XHJcbn1cclxuXHJcbi5jb21wYW55TG9nb3tcclxuICAgIGdyaWQtYXJlYTogY29tcGFueUxvZ287XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAuY29tcGFueXtcclxuICAgICBncmlkLWFyZWE6IGNvbXBhbnk7XHJcbiAgICAgY29sb3I6IHJnYigyNDAsIDI0MSwgMjQ1KTtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICBcclxuIH1cclxuXHJcbiBcclxuXHJcbiAuZXhwZXJpbmNlIHNwYW57XHJcbiAgICAgY29sb3I6IHJnYig0MSwgMjQ3LCAzNCk7XHJcbiB9XHJcblxyXG4gLnRpdGxle1xyXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Nyk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgXHJcbn1cclxuXHJcbi5yb2xle1xyXG4gICAgZ3JpZC1hcmVhOiByb2xlO1xyXG4gICAgY29sb3I6IHJnYigyNDksIDI0OSwgMjUwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICBcclxuICAgXHJcbn1cclxuXHJcbi5uZXh0QnRue1xyXG4gICAgZ3JpZC1hcmVhOiBuZXh0QnRuO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4ucHJldkJ0bntcclxuICAgIGdyaWQtYXJlYTogcHJldkJ0bjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnNraWxsc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHB4LDEwMHB4KSBtaW5tYXgoNDBweCwxMDBweCkgbWlubWF4KDQwcHgsMTAwcHgpIG1pbm1heCg2MHB4LDEwMHB4KSBtaW5tYXgoNjBweCwxZnIpIG1pbm1heCgxMjBweCwxZnIpOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDEwMHB4IDEwMHB4IDEwMHB4IHJlcGVhdCgxMCxhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiZSBiOSBiMTAgYjExIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxIGUxXCJcclxuICAgIFwidDEgdDEgdDEgdDEgdDEgZTIgZTIgZTIgZTIgZTIgZTIgZTIgZTIgZTJcIlxyXG4gICAgXCJ0MiB0MiB0MiB0MiB0MiBlNCBlNCBlNCBlNCBlNCBlNCBlNCBlNCBlNFwiXHJcbiAgICBcInQzIHQzIHQzIHQzIHQzIGU2IGU2IGU2IGU2IGU2IGU2IGU2IGU2IGU2XCJcclxuICAgIFwidDQgdDQgdDQgdDQgdDQgZTggZTggZTggZTggZTggZTggZTggZTggZThcIjtcclxuICAgXHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNraWxscyBzcGFue1xyXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xyXG59XHJcblxyXG4uYjl7XHJcbiAgICBncmlkLWFyZWE6IGI5O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcclxufVxyXG5cclxuLmI5OmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDIzMywgMjI0LCAyMjQpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5iOTpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDIzMSwgMjIyLCAyNDApIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi5iMTB7XHJcbiAgICBncmlkLWFyZWE6IGIxMDtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNnM7XHJcbn1cclxuXHJcbi5iMTA6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjM4LCAyMzQsIDIzNCk7XHJcbiAgICBcclxufVxyXG5cclxuLmIxMDpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDIzOCwgMjM0LCAyNDEpIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi5iMTF7XHJcbiAgICBncmlkLWFyZWE6IGIxMTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNnM7XHJcbn1cclxuXHJcbi5iMTE6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjQ3LCAyNDUsIDI0NSk7XHJcbiAgICBcclxufVxyXG5cclxuLmIxMTpob3ZlcntcclxuICAgIGJvcmRlcjogcmdiKDI0OSwgMjQ2LCAyNTIpIDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHJcbn1cclxuXHJcbi50MXtcclxuICAgIGdyaWQtYXJlYTogdDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgXHJcbn1cclxuXHJcbi50MntcclxuICAgIGdyaWQtYXJlYTogdDI7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBcclxufVxyXG5cclxuLnQze1xyXG4gICAgZ3JpZC1hcmVhOiB0MztcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICBcclxufVxyXG5cclxuLnQ0e1xyXG4gICAgZ3JpZC1hcmVhOiB0NDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIFxyXG59XHJcblxyXG4uaW50ZXJlc3Rze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsbWlubWF4KGF1dG8sMjAwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCByZXBlYXQoNCxhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJlIGUgZSBlXCJcclxuICAgIFwiZTEgaW50ZXJlc3QxVGl0bGUgaW50ZXJlc3QxVGl0bGUgaW50ZXJlc3QxVGl0bGVcIlxyXG4gICAgXCJlMiBpbnRlcmVzdEltYWdlIGludGVyZXN0SW1hZ2UgaW50ZXJlc3RJbWFnZVwiXHJcbiAgICBcImUzIGludGVyZXN0MVRleHQgaW50ZXJlc3QxVGV4dCBpbnRlcmVzdDFUZXh0XCJcclxuICAgIFwiZTQgaW50ZXJlc3RQcmV2QnRuIGU1IGludGVyZXN0TmV4dEJ0blwiO1xyXG4gIFxyXG59XHJcblxyXG4uaW50ZXJlc3QxVGl0bGV7XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0MVRpdGxlO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59XHJcblxyXG4uaW50ZXJlc3RJbWFnZXtcclxuICAgIGdyaWQtYXJlYTogaW50ZXJlc3RJbWFnZTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuLmludGVyZXN0MVRleHR7XHJcbiAgICBncmlkLWFyZWE6IGludGVyZXN0MVRleHQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDI0NCwgMjQ0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59XHJcblxyXG4uaW50ZXJlc3ROZXh0QnRue1xyXG4gICAgZ3JpZC1hcmVhOiBpbnRlcmVzdE5leHRCdG47XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4uaW50ZXJlc3RQcmV2QnRue1xyXG4gICAgZ3JpZC1hcmVhOiBpbnRlcmVzdFByZXZCdG47XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW5tYXgoYXV0bywyMDBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IHJlcGVhdCg0LGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImUgZSBlIGVcIlxyXG4gICAgXCJlMSBjb250YWN0MSBjb250YWN0MSBjb250YWN0MVwiXHJcbiAgICBcImUyIGUyIGUyIGUyXCJcclxuICAgIFwiZTMgY29udGFjdDIgY29udGFjdDIgY29udGFjdDJcIlxyXG4gICAgXCJlNCBlNCBlNCBlNFwiO1xyXG59XHJcblxyXG4uY29udGFjdDF7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRhY3QxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5jb250YWN0MntcclxuICAgIGdyaWQtYXJlYTogY29udGFjdDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
        this.title = 'Kam Parsen';
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
        this.hideAll();
        this.hideAllNav();
        this.buttonClicked = false;
        this.showNav = true;
        this.currentDate = new Date().toDateString();
        this.siteService.GetWeatherInfo();
        this.interestText = '';
        this.interestTitle = '';
        this.hideAllInterests();
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
    hideAll() {
        this.showAbout = false;
        this.showInterests = false;
        this.showEducationMaster = false;
        this.showEducationBachelor = false;
        this.showEducationCertificate = false;
        this.showExperince1 = false;
        this.showExperince2 = false;
        this.showExperince3 = false;
        this.showExperince4 = false;
        this.showExperince5 = false;
        this.showSkill1 = false;
        this.showSkill2 = false;
        this.showSkill3 = false;
        this.showInterest1 = false;
        this.showInterest2 = false;
        this.showInterest3 = false;
        this.showInterest4 = false;
        this.showContact = false;
    }
    hideAllNav() {
        this.showNav = false;
        this.showNav2 = false;
        this.showNav3 = false;
        this.showNav4 = false;
        this.showNav5 = false;
    }
    ShowExperince(level) {
        this.hideAll();
        switch (level) {
            case 'e1':
                this.showExperince1 = true;
                break;
            case 'e2':
                this.showExperince2 = true;
                break;
            case 'e3':
                this.showExperince3 = true;
                break;
            case 'e4':
                this.showExperince4 = true;
                break;
            case 'e5':
                this.showExperince5 = true;
                break;
        }
    }
    showEducation(educationOption) {
        this.hideAll();
        switch (educationOption) {
            case 'm': {
                this.showEducationMaster = true;
                this.buttonClicked = true;
                break;
            }
            case 'b': {
                this.showEducationBachelor = true;
                break;
            }
            case 'c': {
                this.showEducationCertificate = true;
                break;
            }
        }
    }
    Showskill(skillsOption) {
        this.hideAll();
        switch (skillsOption) {
            case 's1': {
                this.showSkill1 = true;
                break;
            }
            case 's2': {
                this.showSkill2 = true;
                break;
            }
            case 's3': {
                this.showSkill3 = true;
                break;
            }
        }
    }
    Showinterest(interestOption) {
        this.hideAll();
        switch (interestOption) {
            case 'i1': {
                this.showInterest1 = true;
                break;
            }
            case 'i2': {
                this.showInterest2 = true;
                break;
            }
            case 'i3': {
                this.showInterest3 = true;
                break;
            }
            case 'i4': {
                this.showInterest4 = true;
                break;
            }
        }
    }
    loadAbout() {
        this.showAbout = true;
    }
    loadEducation() {
        this.hideAll();
        this.showNav = false;
        this.showNav2 = true;
        this.showEducationMaster = true;
        this.showAbout = false;
    }
    loadExperience() {
        this.hideAll();
        this.showNav3 = true;
        this.showNav = false;
        this.showNav2 = false;
        this.showExperince1 = true;
        this.showAbout = false;
    }
    loadSkills() {
        this.hideAll();
        this.hideAllNav();
        this.showNav4 = true;
        this.showSkill1 = true;
    }
    loadInterests() {
        this.hideAll();
        this.hideAllNav();
        this.showNav5 = true;
        this, this.showInterest1 = true;
    }
    loadContact() {
        this.hideAll();
        this.showContact = true;
    }
    hideAllInterests() {
        this.showInterest1 = false;
        this.showInterest2 = false;
        this.showInterest3 = false;
    }
    back(option) {
        this.hideAll();
        this.hideAllNav();
        this.showNav = true;
        this.showAbout = true;
    }
    backFromExperience() {
        this.hideAll();
        this.showNav = true;
        this.showNav2 = false;
        this.showNav3 = false;
        this.showNav4 = false;
        this.showEducationMaster = false;
        this.showAbout = true;
    }
    ConvertKelvinToFarenhite(params) {
        return (params - 273.15) * 1.8 + 32;
    }
    ShowGithub() {
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