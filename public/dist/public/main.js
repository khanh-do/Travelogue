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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:username', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!-- <h1>\n    {{ title }}\n  </h1> -->\n  \n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Travelogue';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: ''
                })
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map { \n    height: 600px; /* height is required */ \n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYSxFQUFFLHVCQUF1Qjs7QUFFMUMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHsgXG4gICAgaGVpZ2h0OiA2MDBweDsgLyogaGVpZ2h0IGlzIHJlcXVpcmVkICovIFxuICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Add Destination</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Edit Profile</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Logout</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t</div>\n</nav>\n\n\n<p *ngIf='selectedMarker'>Lat: {{ selectedMarker.lat }} Lng: {{ selectedMarker.lng }}</p>\n<agm-map [latitude]='latitude' [longitude]='longitude' [zoom]='2.5' (mapClick)='addMarker($event.coords.lat, $event.coords.lng)'>\n\t<agm-marker *ngFor='let marker of markers' [latitude]='marker.lat' [longitude]='marker.lng' [opacity]='marker.alpha'\n\t [markerDraggable]='true' (markerClick)='selectMarker($event)'>\n\t</agm-marker>\n\t>\n</agm-map>\n\n\n<div *ngIf='showForm'>\n\t<form (submit)=\"addCity()\" class=\"form-inline text-center\">\n\t\t<p>City:</p>\n\t\t<input [(ngModel)]=\"newLocation.city\" type=\"text\" name=\"newLocation.city\" placeholder=\"City\" class=\"form-control\"/>\n\t\t<p>State:</p>\n\t\t<input [(ngModel)]=\"newLocation.state\" type=\"text\" name=\"newLocation.state\" placeholder=\"State\" class=\"form-control\"/>\n\t\t<p>Country:</p>\n\t\t<input [(ngModel)]=\"newLocation.country\" type=\"text\" name=\"newLocation.country\" placeholder=\"Country\" class=\"form-control\"/>\n\t\t<!-- <p>Latitude:</p> -->\n\t\t<input [(ngModel)]=\"newLocation.latitude\" type=\"hidden\" name=\"newLocation.latitude\" placeholder=\"Latitude\" class=\"form-control\"/>\n\t\t<!-- <p>Longitude:</p> -->\n\t\t<input [(ngModel)]=\"newLocation.longitude\" type='hidden' name=\"newLocation.longitude\" placeholder=\"Longitude\" class=\"form-control\"/>\n\t\t<input type=\"submit\" value=\"Save This Location\" />\n\t</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { MapsAPILoader, AgmMap } from '@agm/core';
// import { GoogleMapsAPIWrapper } from '@agm/core/services';
// import { google } from '@agm/core/services/google-maps-types';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.lat = 43.879078;
        this.lng = -103.4615581;
        // Declare an empty array to hold coordinates obtained from the database for logged in user
        this.markers = [
        // These are all just random coordinates from https://www.random.org/geographic-coordinates/
        // { lat: 22.33159, lng: 105.63233},
        // { lat: 7.92658, lng: -12.05228},
        // { lat: 48.75606, lng: -118.85900},
        // { lat: 5.19334, lng: -67.03352},
        // { lat: 12.09407, lng: 26.31618},
        // { lat: 47.92393, lng: 78.58339}
        ];
        this.username = "KhanhDo";
        this.errors = [];
        this.showForm = false;
        this.newLocation = { city: '', state: '', country: '', latitude: 0, longitude: 0 };
        //   this.mapsApiLoader = mapsApiLoader;
        // this.wrapper = wrapper;
        // this.mapsApiLoader.load().then(() => {
        //   this.geocoder = new google.maps.Geocoder();
        // });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // The following method gets the user from the database,
        // extracts the locations array from the user's info, and
        // adds the locations' coordinates to the markers array (invoke the addMarker method)
        this.getUser(this.username);
    };
    DashboardComponent.prototype.getUser = function (username) {
        var _this = this;
        // console.log("#2: In dashboard component ts", this.username);
        var tempObservable = this._httpService.getThisUser(this.username);
        tempObservable.subscribe(function (data) {
            // console.log("Got our user!", data);
            // console.log(data['data']['locations'])
            for (var i = 0; i < data['data']['locations'].length; i++) {
                // console.log(data['data']['locations'][i].coordinates);
                // this.markers.push(data['data']['locations'][i].coordinates)
                _this.markers.push(data['data']['locations'][i].coordinates);
            }
        });
    };
    // **Need to modify this method to bring up the info window which asks the user to add, autopopulating with the coords. and City, State name
    DashboardComponent.prototype.addMarker = function (lat, lng) {
        console.log("Lat: ", lat);
        console.log("Long: ", lng);
        this.markers.push({ lat: lat, lng: lng, alpha: 0.6 });
        this.showForm = true;
        this.newLocation.latitude = lat;
        this.newLocation.longitude = lng;
        // findAddressByCoordinates() {
        // this.geocoder.geocode({
        //   'location': {
        //     lat: this.newLocation.latitude,
        //     lng: this.newLocation.longitude
        //   }
        // }, (results, status) => {
        //   console.log(results);
        // })
        // }
    };
    DashboardComponent.prototype.max = function (coordType) {
        return Math.max.apply(Math, this.markers.map(function (marker) { return marker[coordType]; }));
    };
    DashboardComponent.prototype.min = function (coordType) {
        return Math.min.apply(Math, this.markers.map(function (marker) { return marker[coordType]; }));
    };
    DashboardComponent.prototype.selectMarker = function (event) {
        console.log(event);
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude
        };
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.loginThisUser = function (user) {
        // console.log("#3 in http.service.ts user: ", user);
        return this._http.post('/login', user);
    };
    HttpService.prototype.registerThisUser = function (user) {
        // console.log("#3 in http.service.ts user: ", user);
        return this._http.post('/create', user);
    };
    HttpService.prototype.getThisUser = function (username) {
        // console.log("#3 in http.service.ts username: ", username);
        return this._http.get('/userInfo/' + username);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n    background-image: url(https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=beach-calm-clouds-457882.jpg&fm=jpg);\n    background-size: cover;\n    padding: 60px;\n    min-height: 800px;\n    font-family:Arial, Helvetica, sans-serif\n}\nh1 {\n    font-family: Apple Chancery;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNJQUFzSTtJQUN0SSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDU3ODgyL3BleGVscy1waG90by00NTc4ODIuanBlZz9jcz1zcmdiJmRsPWJlYWNoLWNhbG0tY2xvdWRzLTQ1Nzg4Mi5qcGcmZm09anBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxufVxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBBcHBsZSBDaGFuY2VyeTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"login\">\n<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col col-lg-2\">\n      </div>\n\n      <div class=\"col-md-auto\">\n          <div class=\"form-group border rounded center bg-white text-dark mt-5\">\n              <h3>Login</h3>\n            <form (submit)=\"onLogin()\">\n\n               <input [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"loginUser.email\" placeholder=\"Email\" class=\"form-control-sm\"/>\n              <br>\n               <input [(ngModel)]=\"loginUser.password\" type='password' name=\"loginUser.password\" placeholder=\"Password\" class=\"form-control-sm\"><br> -->\n               <!-- <button [routerLink]=\"['/user/:id']\">Login</button>&nbsp;&nbsp; -->\n               \n               <!-- <input type=\"submit\" value=\"Login\"/>\n          \n               <p>Need an account? <a [routerLink]=\"['/register']\">Sign up</a></p>\n          \n            </form>\n          </div>\n          \n          <div *ngIf='errors.length > 0' style='color:red;'>\n            <h6 *ngFor='let error of errors'>{{error}}</h6>\n          </div>\n      </div>\n      <div class=\"col col-lg-2\">\n\n      </div>\n    </div>\n</div>\n\n -->\n\n<!-- New code starts here: -->\n<body>\n\t<div class=\"login\">\n  \n    <!-- <h3 class=\"text-center text-white pt-5\">Login form</h3> -->\n    <div class=\"container\">\n        <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\n            <div id=\"login-column\" class=\"col-md-3\">\n                <div class=\"login-box col-md-12\">\n                  \n                    <form (submit) = \"onLogin()\" >\n                        <h1 class=\"text-center\">Travelogue</h1>\n                        <h5 class=\"text-center text-dark pt-3\">Log into your Account</h5>\n                        <!-- Email -->\n                        <div class=\"form-group text-center\">\n                            <input [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"loginUser.email\" placeholder=\"Email\" class=\"form-control\"/>\n                          </div>\n                        <!-- Password -->\n                        <div class=\"form-group text-center\">\n                            <input [(ngModel)]=\"loginUser.password\" type='password' name=\"loginUser.password\" placeholder=\"Password\" class=\"form-control\">\n                        </div>\n                        <!-- Button -->\n                        <div class=\"form-group text-center\">\n                            <label for=\"remember-me\" class=\"text-info text-dark\"><span>Remember me</span> <span><input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\n                            <input type=\"submit\" value=\"Login\" class=\"btn btn-info btn-md btn-dark\"/>\n                            <!-- <input type=\"submit\" name=\"submit\" class=\"btn btn-info btn-md\" value=\"submit\"> -->\n                        </div>\n\n                        <div id=\"register-link\" class=\"text-center\">\n                        <p>Need an account? <a [routerLink]=\"['/register']\">Sign up</a></p>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf='errors.length > 0' style='color:red;'>\n    <h6 *ngFor='let error of errors'>{{error}}</h6>\n  </div>\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.loginUser = { email: '', password: '' };
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log("#2: In login component ts", this.loginUser);
        var tempObservable = this._httpService.loginThisUser(this.loginUser);
        tempObservable.subscribe(function (data) {
            console.log("#6 login component got the user", data);
            _this.errors = [];
            if (data['message'] === 'User not found') {
                console.log("Going back home");
                _this.errors.push("Email/Password combination is not valid.");
            }
            else if (data['message'] === 'Password is null') {
                console.log("No password");
                _this.errors.push("Please enter your password.");
            }
            else if (data['message'] === "The passwords don't match.") {
                console.log("Passwords don't match");
                _this.errors.push("Email/Password combination is not valid.");
            }
            // if(resp['message'] === 'error') {
            //   console.log("This is our error data: ", resp);
            //     // console.log(resp['errors']['errors']['name']['message'])
            //     var errorsResponse = resp['errors']['errors']
            //     for(var key in errorsResponse){
            //       var errString = key + ' - ' + errorsResponse[key]['message']
            //       this.errors.push(errString)          
            //     }  
            //   if(resp['errors']['code'] === 11000){
            //     this.errors.push("This author is a duplicate, please enter a unique author")
            //   }     
            // } else {
            //   this.goHome();
            // }
        });
    };
    LoginComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n    background-image: url(https://images.pexels.com/photos/876218/pexels-photo-876218.jpeg?cs=srgb&dl=architecture-benches-buildings-876218.jpg&fm=jpg);\n    background-size: cover;\n    padding: 60px;\n    min-height: 800px;\n    font-family:Arial, Helvetica, sans-serif\n}\nh1 {\n    font-family: Apple Chancery;\n}\n#login-column {\n    border: 2px solid rgba(126, 145, 173);\n    background-color:rgba(126, 145, 173, 0.5);\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1KQUFtSjtJQUNuSixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyx5Q0FBeUM7O0FBRTdDIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzg3NjIxOC9wZXhlbHMtcGhvdG8tODc2MjE4LmpwZWc/Y3M9c3JnYiZkbD1hcmNoaXRlY3R1cmUtYmVuY2hlcy1idWlsZGluZ3MtODc2MjE4LmpwZyZmbT1qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IEFwcGxlIENoYW5jZXJ5O1xufVxuI2xvZ2luLWNvbHVtbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjYsIDE0NSwgMTczKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTI2LCAxNDUsIDE3MywgMC41KTtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Register:</h3>\n<div class=\"form\">\n  <form (submit)=\"onRegister()\">\n      <p>First Name:</p>\n      <input [(ngModel)]=\"registerUser.first_name\" type=\"text\" name=\"registerUser.first_name\" placeholder=\"First Name\"/>\n      <p>Last Name:</p>\n     <input [(ngModel)]=\"registerUser.last_name\" type=\"text\" name=\"registerUser.last_name\" placeholder=\"Last Name\"/>\n     <p>Username:</p>\n     <input [(ngModel)]=\"registerUser.username\" type=\"text\" name=\"registerUser.username\" placeholder=\"Username\"/>\n     <p>Email:</p>\n     <input [(ngModel)]=\"registerUser.email\" type=\"text\" name=\"registerUser.email\" placeholder=\"Email\"/>\n     <p>Password:</p>\n     <input [(ngModel)]=\"registerUser.password\" type='password' name=\"registerUser.password\" placeholder=\"Password\"><br>\n     <p>Confirm Password:</p>\n     <input [(ngModel)]=\"register.confirm_pass\" type=\"password\" name=\"register.confirm_pass\" placeholder=\"Confirm Password\"/>\n     <br>\n     <br>\n     <input type=\"submit\" value=\"Register\"/>\n\n  </form>\n</div>\n\n<div *ngIf='errors.length > 0' style='color:red;'>\n  <h6 *ngFor='let error of errors'>{{error}}</h6>\n</div> -->\n\n<!-- New code starts here: -->\n<body>\n    <div class=\"register\">\n    \n      <!-- <h3 class=\"text-center text-white pt-5\">Login form</h3> -->\n      <div class=\"container\">\n          <div id=\"login-row\" class=\"row justify-content-center align-items-center \">\n              <div id=\"login-column\" class=\"col-md-3\">\n                  <div class=\"login-box col-md-12\">\n                    \n                      <form (submit)=\"onRegister()\" >\n                          <h1 class=\"text-center\">Travelogue</h1>\n                          <h5 class=\"text-center text-dark pt-3\">Register for an Account</h5>\n                          <!-- First Name -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"registerUser.first_name\" type=\"text\" name=\"registerUser.first_name\" placeholder=\"First Name\" class=\"form-control\"/>\n                            </div>\n                          <!-- Last Name -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"registerUser.last_name\" type=\"text\" name=\"registerUser.last_name\" placeholder=\"Last Name\" class=\"form-control\"/>\n                          </div>\n                          <!-- First Username -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"registerUser.username\" type=\"text\" name=\"registerUser.username\" placeholder=\"Username\" class=\"form-control\"/>\n                            </div>\n                          <!-- Email -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"registerUser.email\" type=\"text\" name=\"registerUser.email\" placeholder=\"Email\" class=\"form-control\"/>\n                            </div>\n                          <!-- Password -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"registerUser.password\" type='password' name=\"registerUser.password\" placeholder=\"Password\" class=\"form-control\"/>\n                            </div>\n                          <!-- Confirm Password -->\n                          <div class=\"form-group text-center\">\n                              <input [(ngModel)]=\"register.confirm_pass\" type=\"password\" name=\"register.confirm_pass\" placeholder=\"Confirm Password\" class=\"form-control\"/>\n                            </div>\n\n                          <!-- Button -->\n                          <div class=\"form-group text-center\">\n                              <label for=\"remember-me\" class=\"text-info text-dark\"><span>Remember me</span> <span><input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\n                              <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-md btn-dark\"/>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"text-center\" *ngIf='errors.length > 0' style='color:red;'>\n          <h6 *ngFor='let error of errors'>{{error}}</h6>\n        </div>\n  </div>\n  \n\n\n  </body>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.registerUser = { first_name: '', last_name: '', username: '', email: '', password: '' };
        this.errors = [];
        this.register = { confirm_pass: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (this.registerUser.password !== this.register.confirm_pass) {
            this.errors = [];
            this.errors.push("The passwords do not match");
            console.log("error: ", this.errors);
        }
        console.log("#2: In login component ts", this.registerUser);
        var tempObservable = this._httpService.registerThisUser(this.registerUser);
        tempObservable.subscribe(function (data) {
            console.log(" #6 Register component got the new user", data);
            _this.errors = [];
            if (data['message'] === 'error') {
                console.log("This is our error data ", data);
                var errorsResponse = data['errors']['errors'];
                for (var key in errorsResponse) {
                    var errString = errorsResponse[key]['message'];
                    _this.errors.push(errString);
                }
                if (data['errors']['code'] === 11000) {
                    _this.errors.push("This username/email already exist");
                }
            }
            else {
                _this._router.navigate(['user/' + data['username']]);
            }
        });
    };
    RegisterComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = __webpack_require__(/*! /Users/ashleyhull/Desktop/Travelogue/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map