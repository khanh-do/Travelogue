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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <!-- <h1>\r\n    {{ title }}\r\n  </h1> -->\r\n  \r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");













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
                _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
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

module.exports = "agm-map { \r\n    height: 600px; /* height is required */     \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYSxFQUFFLHVCQUF1QjtBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAgeyBcclxuICAgIGhlaWdodDogNjAwcHg7IC8qIGhlaWdodCBpcyByZXF1aXJlZCAqLyAgICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\t\t<ul class=\"navbar-nav mr-auto\">\r\n\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Add Destination</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Edit Profile</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Logout</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t</div>\r\n</nav>\r\n\r\n\r\n<!-- <p *ngIf='selectedMarker'>Lat: {{ selectedMarker.lat }} Lng: {{ selectedMarker.lng }}</p> -->\r\n<agm-map [latitude]='latitude' [longitude]='longitude' [zoom]='2.5' (mapClick)='addMarker($event.coords.lat, $event.coords.lng)'>\r\n\t<agm-marker *ngFor='let marker of markers' [latitude]='marker.lat' [longitude]='marker.lng' [opacity]='marker.alpha'\r\n\t [markerDraggable]='true' (markerClick)='selectMarker($event)'>\r\n\t</agm-marker>\r\n\t>\r\n</agm-map>\r\n\r\n\r\n<div *ngIf='showForm'>\r\n\t<form (submit)=\"onAddLocation()\" class=\"form-inline text-center\">\r\n\t\t<p>City:</p>\r\n\t\t<input [(ngModel)]=\"newLocation.city\" type=\"text\" name=\"newLocation.city\" placeholder=\"City\" class=\"form-control\"/>\r\n\t\t<p>State:</p>\r\n\t\t<input [(ngModel)]=\"newLocation.state\" type=\"text\" name=\"newLocation.state\" placeholder=\"State\" class=\"form-control\"/>\r\n\t\t<p>Country:</p>\r\n\t\t<input [(ngModel)]=\"newLocation.country\" type=\"text\" name=\"newLocation.country\" placeholder=\"Country\" class=\"form-control\"/>\r\n\t\t<!-- <p>Latitude:</p> -->\r\n\t\t<input [(ngModel)]=\"newLocation.coordinates.lat\" type=\"hidden\" name=\"newLocation.coordinates.lat\" placeholder=\"Latitude\" class=\"form-control\"/>\r\n\t\t<!-- <p>Longitude:</p> -->\r\n\t\t<input [(ngModel)]=\"newLocation.coordinates.lng\" type='hidden' name=\"newLocation.coordinates.lng\" placeholder=\"Longitude\" class=\"form-control\"/>\r\n\t\t<input type=\"submit\" value=\"Save This Location\" />\r\n\t</form>\r\n</div>\r\n\r\n<div>\r\n\t<!-- <app-details *ngIf=\"selectedLocation\" [locationToShow]=\"selectedLocation\"></app-details> -->\r\n\t<app-details *ngIf=\"showDetails\" [locationToShow]=\"selectedLocation\"></app-details>\r\n</div>\r\n\r\n"

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




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // lat = 43.879078;
        // lng = -103.4615581;
        this.username = "";
        this.errors = [];
        // Declare an empty array to hold coordinates of locations saved by the logged in user (obtained from database) to render markers
        this.markers = [];
        // Variable to store the user's information
        this.userInfo = {};
        // A form to save a new location will show when the showForm variable is set to true
        this.showForm = false;
        this.newLocation = { city: '', state: '', country: '', coordinates: { lat: 0, lng: 0 } };
        // The nested details component will render when the showDetails variable is set to true
        this.showDetails = false;
        // The selectedLocation variable will hold the location information when the user clicked on a marker of a saved location
        this.selectedLocation = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the user information from the database if the username is stored in sessionStorage,
        // otherwise redirect to the login page
        var sessionUsername = sessionStorage.getItem('username');
        this._route.params.subscribe(function (params) {
            _this.username = params['username'];
            if (sessionUsername === _this.username) {
                _this.getUser(_this.username);
            }
            else {
                _this.goHome();
            }
        });
    };
    // Extract the locations array from the user's info, and adds the locations' coordinates to the markers array
    DashboardComponent.prototype.getUser = function (username) {
        var _this = this;
        // console.log("#2: In dashboard component ts", this.username);
        var tempObservable = this._httpService.getThisUser(this.username);
        tempObservable.subscribe(function (data) {
            console.log("Got our user!", data);
            _this.userInfo = data;
            console.log(_this.userInfo);
            // console.log(data['data']['locations'])
            for (var i = 0; i < data['data']['locations'].length; i++) {
                // console.log(data['data']['locations'][i].coordinates);
                // this.markers.push(data['data']['locations'][i].coordinates)
                _this.markers.push(data['data']['locations'][i].coordinates);
            }
        });
    };
    DashboardComponent.prototype.selectMarker = function (event) {
        // Set variable showForm to false to clear the save new location form display
        this.showForm = false;
        // console.log("This marker was selected", event)
        // Set the selected location coordinates to the selectedMarker latitude and longitude
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude
        };
        // console.log("selectedMarker: ", this.selectedMarker)
        // Use the coordinates of the selected marker to find its location and to display its details
        for (var i = 0; i < this.userInfo['data']['locations'].length; i++) {
            // console.log("to match: ", this.userInfo['data']['locations'][i].coordinates)
            if (this.userInfo['data']['locations'][i]['coordinates'].lat == this.selectedMarker.lat) {
                // console.log("The location we found was ", this.userInfo['data']['locations'][i].city);
                this.selectedLocation = this.userInfo['data']['locations'][i];
                this.showDetails = true;
            }
        }
    };
    // Show add location form, pre-populating with the city, state, country, and coordinates of the marked location
    DashboardComponent.prototype.addMarker = function (lat, lng) {
        var _this = this;
        // Clear the previous details display, if any, when the user selects a new location on the map to add
        this.showDetails = false;
        this.selectedLocation = {};
        // console.log("Lat: ", lat)
        // console.log("Long: ", lng)
        this.markers.push({ lat: lat, lng: lng, alpha: 0.6 });
        // Set the variable showForm to true which will display the form to save this new location
        this.showForm = true;
        this.newLocation.coordinates.lat = lat;
        this.newLocation.coordinates.lng = lng;
        // Get the city, state and country information from the OSM API
        var tempObservable = this._httpService.getAddress(lat, lng);
        tempObservable.subscribe(function (data) {
            // Define the city, state, country of the clicked location from the OSM API
            if (data['address'].city) {
                _this.newLocation.city = data['address'].city;
            }
            else if (data['address'].town) {
                _this.newLocation.city = data['address'].town;
            }
            else if (data['address'].village) {
                _this.newLocation.city = data['address'].village;
            }
            else if (data['address'].suburb) {
                _this.newLocation.city = data['address'].suburb;
            }
            else if (data['address'].hamlet) {
                _this.newLocation.city = data['address'].hamlet;
            }
            else if (data['address'].county) {
                _this.newLocation.city = data['address'].county;
            }
            else {
                _this.newLocation.city = 'City';
            }
            if (data['address'].state) {
                _this.newLocation.state = data['address'].state;
            }
            if (data['address'].country) {
                _this.newLocation.country = data['address'].country;
            }
        });
    };
    DashboardComponent.prototype.onAddLocation = function () {
        var _this = this;
        console.log("#2 In onAddLocation method:", this.username, this.newLocation);
        var tempObservable = this._httpService.addLocation(this.username, this.newLocation);
        tempObservable.subscribe(function (resp) {
            // console.log("#6 back in onAddLocation method", this.username)
            // this._router.navigate(['user/:'+this.username]);
            // Refresh the dashboard component and map after saving the new location
            _this._router.navigateByUrl('', { skipLocationChange: true }).then(function () {
                return _this._router.navigate(['user/' + _this.username]);
            });
        });
    };
    // methods used in drawing a rectangle
    // max(coordType: 'lat' | 'lng'): number {
    //   return Math.max(...this.markers.map(marker => marker[coordType]));
    // }
    // min(coordType: 'lat' | 'lng'): number {
    //   return Math.min(...this.markers.map(marker => marker[coordType]));
    // }
    DashboardComponent.prototype.goHome = function () {
        this._router.navigate(['']);
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

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rating{\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    display:flex;\r\n}\r\n\r\n.rating input{\r\n\r\n    display:none;\r\n}\r\n\r\n.rating label{\r\n    display:block;\r\n    cursor: pointer;\r\n    width:50px;\r\n    /* background: #ccc; */\r\n}\r\n\r\n.rating label:before{\r\n    content:'\\f005';\r\n    font-family: fontAwesome;\r\n    position: relative;\r\n    display: block;\r\n    font-size:50px;\r\n    color: gray;\r\n}\r\n\r\n.rating label:after{\r\n    content:'\\f005';\r\n    font-family: fontAwesome;\r\n    position: absolute;\r\n    display: block;\r\n    font-size:50px;\r\n    color:yellow;\r\n    top:0;\r\n    opacity: 0;\r\n    transition: .5s;\r\n    text-shadow: 0 2px 5px rgba(0,0,0,.5);\r\n}\r\n\r\n.rating label:hover:after,\r\n.rating label:hover ~ label:after,\r\n.rating input:checked ~ label:after\r\n{\r\n    opacity:1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osS0FBSztJQUNMLFVBQVU7SUFDVixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBOzs7O0lBSUksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5ne1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5yYXRpbmcgaW5wdXR7XHJcblxyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ucmF0aW5nIGxhYmVse1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjY2NjOyAqL1xyXG59XHJcblxyXG4ucmF0aW5nIGxhYmVsOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6J1xcZjAwNSc7XHJcbiAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5yYXRpbmcgbGFiZWw6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OidcXGYwMDUnO1xyXG4gICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIGNvbG9yOnllbGxvdztcclxuICAgIHRvcDowO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuXHJcbi5yYXRpbmcgbGFiZWw6aG92ZXI6YWZ0ZXIsXHJcbi5yYXRpbmcgbGFiZWw6aG92ZXIgfiBsYWJlbDphZnRlcixcclxuLnJhdGluZyBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXJcclxue1xyXG4gICAgb3BhY2l0eToxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center align-items-center\">\r\n  <h1 class=\"text-center text-dark pt-3\">{{locationToShow.city}}, {{locationToShow.state}}</h1>\r\n  <h2>{{locationToShow.country}}</h2>\r\n</div>\r\n\r\n<div *ngFor='let attraction of locationToShow.attractions'>\r\n  <p>Attraction: {{attraction.name}}</p>\r\n  <p>Rating: {{attraction.rating}}</p>\r\n  <p>Review: {{attraction.review}}</p>\r\n</div>\r\n\r\n<div class=\"row justify-content-center align-items-center\">\r\n  <form (submit)=\"addAttraction()\">\r\n    <h3 class=\"text-center text-dark pt-3\">Add New Attraction</h3>\r\n  \r\n    <div class=\"form-group text-center\">\r\n      <input type=\"text\" name=\"\" placeholder=\"Attraction\"\r\n        class=\"form-control\" />\r\n    </div>\r\n \r\n    <div class=\"form-group text-center\">\r\n      <input type=\"text\" name=\"\" placeholder=\"Review\" class=\"form-control\" />\r\n    </div>\r\n  \r\n    <div class=\"form-group text-center\">\r\n      <div class=\"rating\">\r\n        <input type=\"radio\" name=\"star\" id=\"star1\"><label for=\"star1\" class=\"form-check\"></label>\r\n        <input type=\"radio\" name=\"star\" id=\"star2\"><label for=\"star2\" class=\"form-check\"></label>\r\n        <input type=\"radio\" name=\"star\" id=\"star3\"><label for=\"star3\" class=\"form-check\"></label>\r\n        <input type=\"radio\" name=\"star\" id=\"star4\"><label for=\"star4\" class=\"form-check\"></label>\r\n        <input type=\"radio\" name=\"star\" id=\"star5\"><label for=\"star5\" class=\"form-check\"></label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group text-center\">\r\n      <input type=\"submit\" value=\"Add\" class=\"btn btn-info btn-md btn-dark\" />\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsComponent.prototype, "locationToShow", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
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
    HttpService.prototype.getAddress = function (lat, long) {
        console.log("#3 in http.service.ts lat lng: ", lat, long);
        return this._http.get('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long + '&zoom=18&addressdetails=1');
    };
    HttpService.prototype.addLocation = function (username, locationToAdd) {
        console.log("#3 in http.service.ts location: ", locationToAdd);
        return this._http.put('/userInfo/' + username, locationToAdd);
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

module.exports = ".login {\r\n    background-image: url(https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=beach-calm-clouds-457882.jpg&fm=jpg);\r\n    background-size: cover;\r\n    padding: 60px;\r\n    min-height: 800px;\r\n    font-family:Arial, Helvetica, sans-serif\r\n}\r\nh1 {\r\n    font-family: Apple Chancery;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNJQUFzSTtJQUN0SSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80NTc4ODIvcGV4ZWxzLXBob3RvLTQ1Nzg4Mi5qcGVnP2NzPXNyZ2ImZGw9YmVhY2gtY2FsbS1jbG91ZHMtNDU3ODgyLmpwZyZmbT1qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufVxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogQXBwbGUgQ2hhbmNlcnk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"login\">\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col col-lg-2\">\r\n      </div>\r\n\r\n      <div class=\"col-md-auto\">\r\n          <div class=\"form-group border rounded center bg-white text-dark mt-5\">\r\n              <h3>Login</h3>\r\n            <form (submit)=\"onLogin()\">\r\n\r\n               <input [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"loginUser.email\" placeholder=\"Email\" class=\"form-control-sm\"/>\r\n              <br>\r\n               <input [(ngModel)]=\"loginUser.password\" type='password' name=\"loginUser.password\" placeholder=\"Password\" class=\"form-control-sm\"><br> -->\r\n               <!-- <button [routerLink]=\"['/user/:id']\">Login</button>&nbsp;&nbsp; -->\r\n               \r\n               <!-- <input type=\"submit\" value=\"Login\"/>\r\n          \r\n               <p>Need an account? <a [routerLink]=\"['/register']\">Sign up</a></p>\r\n          \r\n            </form>\r\n          </div>\r\n          \r\n          <div *ngIf='errors.length > 0' style='color:red;'>\r\n            <h6 *ngFor='let error of errors'>{{error}}</h6>\r\n          </div>\r\n      </div>\r\n      <div class=\"col col-lg-2\">\r\n\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n -->\r\n\r\n<!-- New code starts here: -->\r\n<body>\r\n\t<div class=\"login\">\r\n  \r\n    <!-- <h3 class=\"text-center text-white pt-5\">Login form</h3> -->\r\n    <div class=\"container\">\r\n        <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\r\n            <div id=\"login-column\" class=\"col-md-3\">\r\n                <div class=\"login-box col-md-12\">\r\n                  \r\n                    <form (submit) = \"onLogin()\" >\r\n                        <h1 class=\"text-center\">Travelogue</h1>\r\n                        <h5 class=\"text-center text-dark pt-3\">Log into your Account</h5>\r\n                        <!-- Email -->\r\n                        <div class=\"form-group text-center\">\r\n                            <input [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"loginUser.email\" placeholder=\"Email\" class=\"form-control\"/>\r\n                          </div>\r\n                        <!-- Password -->\r\n                        <div class=\"form-group text-center\">\r\n                            <input [(ngModel)]=\"loginUser.password\" type='password' name=\"loginUser.password\" placeholder=\"Password\" class=\"form-control\">\r\n                        </div>\r\n                        <!-- Button -->\r\n                        <div class=\"form-group text-center\">\r\n                            <label for=\"remember-me\" class=\"text-info text-dark\"><span>Remember me</span> <span><input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\r\n                            <input type=\"submit\" value=\"Login\" class=\"btn btn-info btn-md btn-dark\"/>\r\n                            <!-- <input type=\"submit\" name=\"submit\" class=\"btn btn-info btn-md\" value=\"submit\"> -->\r\n                        </div>\r\n\r\n                        <div id=\"register-link\" class=\"text-center\">\r\n                        <p>Need an account? <a [routerLink]=\"['/register']\">Sign up</a></p>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='errors.length > 0' style='color:red;'>\r\n    <h6 *ngFor='let error of errors'>{{error}}</h6>\r\n  </div>\r\n\r\n\r\n</body>\r\n"

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
            // Clear the errors array per every login attempt
            _this.errors = [];
            if (data['message'] === 'Email is null') {
                _this.errors.push("Please enter your login email.");
            }
            else if (data['message'] === 'User not found') {
                console.log("Going back home");
                _this.errors.push("Email/Password combination is not valid.");
            }
            else if (data['message'] === 'Password is invalid') {
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
            else {
                // console.log("username: ", data['data']['username']);
                var username = data['data']['username'];
                // upon successful login, save username to Window.sessionStorage
                sessionStorage.setItem('username', username);
                // then redirect to the user's dashboard
                _this._router.navigate(['user/' + username]);
            }
            // if(resp['message'] === 'Error') {
            //   console.log("This is our error data: ", resp);
            //     // console.log(resp['errors']['errors']['name']['message'])
            //     var errorsResponse = resp['errors']['errors']
            //     for(var key in errorsResponse){
            //       var errString = errorsResponse[key]['message']
            //       this.errors.push(errString)          
            //     }  
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

module.exports = ".register {\r\n    background-image: url(https://images.pexels.com/photos/876218/pexels-photo-876218.jpeg?cs=srgb&dl=architecture-benches-buildings-876218.jpg&fm=jpg);\r\n    background-size: cover;\r\n    padding: 60px;\r\n    min-height: 800px;\r\n    font-family:Arial, Helvetica, sans-serif\r\n}\r\nh1 {\r\n    font-family: Apple Chancery;\r\n}\r\n#login-column {\r\n    border: 2px solid rgba(126, 145, 173);\r\n    background-color:rgba(126, 145, 173, 0.5);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1KQUFtSjtJQUNuSixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyx5Q0FBeUM7O0FBRTdDIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvODc2MjE4L3BleGVscy1waG90by04NzYyMTguanBlZz9jcz1zcmdiJmRsPWFyY2hpdGVjdHVyZS1iZW5jaGVzLWJ1aWxkaW5ncy04NzYyMTguanBnJmZtPWpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcHBsZSBDaGFuY2VyeTtcclxufVxyXG4jbG9naW4tY29sdW1uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI2LCAxNDUsIDE3Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTI2LCAxNDUsIDE3MywgMC41KTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Register:</h3>\r\n<div class=\"form\">\r\n  <form (submit)=\"onRegister()\">\r\n      <p>First Name:</p>\r\n      <input [(ngModel)]=\"registerUser.first_name\" type=\"text\" name=\"registerUser.first_name\" placeholder=\"First Name\"/>\r\n      <p>Last Name:</p>\r\n     <input [(ngModel)]=\"registerUser.last_name\" type=\"text\" name=\"registerUser.last_name\" placeholder=\"Last Name\"/>\r\n     <p>Username:</p>\r\n     <input [(ngModel)]=\"registerUser.username\" type=\"text\" name=\"registerUser.username\" placeholder=\"Username\"/>\r\n     <p>Email:</p>\r\n     <input [(ngModel)]=\"registerUser.email\" type=\"text\" name=\"registerUser.email\" placeholder=\"Email\"/>\r\n     <p>Password:</p>\r\n     <input [(ngModel)]=\"registerUser.password\" type='password' name=\"registerUser.password\" placeholder=\"Password\"><br>\r\n     <p>Confirm Password:</p>\r\n     <input [(ngModel)]=\"register.confirm_pass\" type=\"password\" name=\"register.confirm_pass\" placeholder=\"Confirm Password\"/>\r\n     <br>\r\n     <br>\r\n     <input type=\"submit\" value=\"Register\"/>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf='errors.length > 0' style='color:red;'>\r\n  <h6 *ngFor='let error of errors'>{{error}}</h6>\r\n</div> -->\r\n\r\n<!-- New code starts here: -->\r\n<body>\r\n    <div class=\"register\">\r\n    \r\n      <!-- <h3 class=\"text-center text-white pt-5\">Login form</h3> -->\r\n      <div class=\"container\">\r\n          <div id=\"login-row\" class=\"row justify-content-center align-items-center \">\r\n              <div id=\"login-column\" class=\"col-md-3 rounded\">\r\n                  <div class=\"login-box col-md-12\">\r\n                    \r\n                      <form (submit)=\"onRegister()\" >\r\n                          <h1 class=\"text-center\">Travelogue</h1>\r\n                          <h5 class=\"text-center text-dark pt-3\">Register for an Account</h5>\r\n                          <!-- First Name -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"registerUser.first_name\" type=\"text\" name=\"registerUser.first_name\" placeholder=\"First Name\" class=\"form-control\"/>\r\n                            </div>\r\n                          <!-- Last Name -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"registerUser.last_name\" type=\"text\" name=\"registerUser.last_name\" placeholder=\"Last Name\" class=\"form-control\"/>\r\n                          </div>\r\n                          <!-- First Username -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"registerUser.username\" type=\"text\" name=\"registerUser.username\" placeholder=\"Username\" class=\"form-control\"/>\r\n                            </div>\r\n                          <!-- Email -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"registerUser.email\" type=\"text\" name=\"registerUser.email\" placeholder=\"Email\" class=\"form-control\"/>\r\n                            </div>\r\n                          <!-- Password -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"registerUser.password\" type='password' name=\"registerUser.password\" placeholder=\"Password\" class=\"form-control\"/>\r\n                            </div>\r\n                          <!-- Confirm Password -->\r\n                          <div class=\"form-group text-center\">\r\n                              <input [(ngModel)]=\"register.confirm_pass\" type=\"password\" name=\"register.confirm_pass\" placeholder=\"Confirm Password\" class=\"form-control\"/>\r\n                            </div>\r\n\r\n                          <!-- Button -->\r\n                          <div class=\"form-group text-center\">\r\n                              <label for=\"remember-me\" class=\"text-info text-light\r\n                              \"><span>Remember me</span> <span><input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\r\n                              <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-md btn-dark\"/>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"text-center\" *ngIf='errors.length > 0' style='color:red;'>\r\n          <h6 *ngFor='let error of errors'>{{error}}</h6>\r\n        </div>\r\n  </div>\r\n  \r\n\r\n\r\n  </body>"

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
        // declare a variable to hold the confirm password field (compare against the user password)
        this.register = { confirm_pass: '' };
        this.errors = [];
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
                console.log("username from registration: ", data['username']);
                var username = data['username'];
                sessionStorage.setItem('username', username);
                // this._router.navigate(['user/' + data['username']]);
                _this._router.navigate(['user/', username]);
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

module.exports = __webpack_require__(/*! C:\Users\khanh\Documents\Coding Dojo\mean-stack\General\travelogue\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map