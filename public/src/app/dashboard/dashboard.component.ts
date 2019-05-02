import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/edge';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { MapsAPILoader, AgmMap } from '@agm/core';
// import { GoogleMapsAPIWrapper } from '@agm/core/services';
// import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // styles: ['agm-map { height: 600px; /* height is required */ }'],
  // template: `
  //   <agm-map [zoom]="2.5">
  //   </agm-map>
  // `
})
export class DashboardComponent implements OnInit {
  lat = 43.879078;
  lng = -103.4615581;
  selectedMarker;
  // Declare an empty array to hold coordinates obtained from the database for logged in user
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    // { lat: 22.33159, lng: 105.63233},
    // { lat: 7.92658, lng: -12.05228},
    // { lat: 48.75606, lng: -118.85900},
    // { lat: 5.19334, lng: -67.03352},
    // { lat: 12.09407, lng: 26.31618},
    // { lat: 47.92393, lng: 78.58339}
  ];
  username = "";
  errors = [];
  // A new location form will show when this variable is set to true
  showForm = false;
  newLocation = {city: '', state: '', country: '', latitude: 0, longitude: 0};
  geocoder;
  selectedLocation={};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    // public mapsApiLoader: MapsAPILoader,
    // private wrapper: GoogleMapsAPIWrapper    
    ) {
    //   this.mapsApiLoader = mapsApiLoader;
    // this.wrapper = wrapper;
    // this.mapsApiLoader.load().then(() => {
    //   this.geocoder = new google.maps.Geocoder();
    // });
     }

  ngOnInit() {
    // The following method gets the user from the database if the username is stored in session,
    // extracts the locations array from the user's info, and
    // adds the locations' coordinates to the markers array
    console.log("from storage:", sessionStorage.getItem('username'));
    let sessionUsername = sessionStorage.getItem('username');
    this._route.params.subscribe((params: Params) => {
      console.log("From URL: " + params['username']);
      this.username = params['username'];
      if(sessionUsername === this.username){
        this.getUser(this.username);
      }else{
        this.goHome();
      }
    });            
  }

  getUser(username){
    // console.log("#2: In dashboard component ts", this.username);
    let tempObservable = this._httpService.getThisUser(this.username);
    tempObservable.subscribe(data => {
      console.log("Got our user!", data);
      // console.log(data['data']['locations'])
      for(var i=0; i<data['data']['locations'].length; i++){
        // console.log(data['data']['locations'][i].coordinates);
        // this.markers.push(data['data']['locations'][i].coordinates)
        this.markers.push(data['data']['locations'][i].coordinates)
      }   
      this.selectedLocation = data['data']['locations'][0]
      console.log("--------->check here: ", this.selectedLocation)
      console.log("--------->check here: ", data)
    })
  }

  // **Need to modify this method to bring up the info window which asks the user to add, autopopulating with the coords. and City, State name
  addMarker(lat: number, lng: number) {
    console.log("Lat: ", lat)
    console.log("Long: ", lng)
    this.markers.push({ lat, lng, alpha: 0.6 });
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
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    console.log(event)
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
  goHome() {
    this._router.navigate(['']);
  }
}
