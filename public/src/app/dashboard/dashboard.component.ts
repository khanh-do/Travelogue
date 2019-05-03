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
  // lat = 43.879078;
  // lng = -103.4615581;
  username = "";
  errors = [];
  selectedMarker;
  // Declare an empty array to hold coordinates of locations saved by the logged in user (obtained from database) to render markers
  markers = [];
  // Variable to store the user's information
  userInfo = {};
  
  // A form to save a new location will show when the showForm variable is set to true
  showForm = false;
  newLocation = {city: '', state: '', country: '', latitude: 0, longitude: 0};
  geocoder;
  // The nested details component will render when the showDetails variable is set to true
  showDetails = false;
  // The selectedLocation variable will hold the location information when the user clicked on a marker of a saved location
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
    // Get the user information from the database if the username is stored in sessionStorage,
    // otherwise redirect to the login page
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

  // Extract the locations array from the user's info, and adds the locations' coordinates to the markers array
  getUser(username){
    // console.log("#2: In dashboard component ts", this.username);
    let tempObservable = this._httpService.getThisUser(this.username);
    tempObservable.subscribe(data => {
      console.log("Got our user!", data);
      this.userInfo = data;
      console.log(this.userInfo);
      // console.log(data['data']['locations'])
      for(var i=0; i<data['data']['locations'].length; i++){
        // console.log(data['data']['locations'][i].coordinates);
        // this.markers.push(data['data']['locations'][i].coordinates)
        this.markers.push(data['data']['locations'][i].coordinates)
      }   
      // this.selectedLocation = data['data']['locations'][3]
      // console.log("--------->check here: ", this.selectedLocation)
      // console.log("--------->check here: ", data)
    })
  }

  // **Need to modify this method to bring up the info window which asks the user to add, autopopulating with the coords. and City, State name
  addMarker(lat: number, lng: number) {
    // Clear the previous details display, if any, when the user selects a new location on the map to add
    this.showDetails = false;
    this.selectedLocation = {};

    console.log("Lat: ", lat)
    console.log("Long: ", lng)
    this.markers.push({ lat, lng, alpha: 0.6 });
    // Set the variable showForm to true which will display the form to save this new location
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

  selectMarker(event) {
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
    for(var i=0; i<this.userInfo['data']['locations'].length; i++){
      // console.log("to match: ", this.userInfo['data']['locations'][i].coordinates)
      if(this.userInfo['data']['locations'][i]['coordinates'].lat == this.selectedMarker.lat){
        // console.log("The location we found was ", this.userInfo['data']['locations'][i].city);
        this.selectedLocation = this.userInfo['data']['locations'][i];
        this.showDetails=true;
      }
    }
  }

  // methods used in drawing a rectangle
  // max(coordType: 'lat' | 'lng'): number {
  //   return Math.max(...this.markers.map(marker => marker[coordType]));
  // }

  // min(coordType: 'lat' | 'lng'): number {
  //   return Math.min(...this.markers.map(marker => marker[coordType]));
  // }

  goHome() {
    this._router.navigate(['']);
  }
}
