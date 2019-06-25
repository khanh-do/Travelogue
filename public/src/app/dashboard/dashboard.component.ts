import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/edge';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  
})

export class DashboardComponent implements OnInit {
  // Initialize the username variable, the errors array, and the selected marker
  username = "";
  errors = [];
  selectedMarker;
  // Declare an empty array to hold coordinates of locations saved by the logged in user (obtained from database) to render markers
  markers = [];
  // Variable to store the user's information
  userInfo = {};
  
  // A form to save a new location will show when the showForm variable is set to true
  showForm = false;  
  // Initialize the newLocation object
  newLocation = {city: '', state: '', country: '', coordinates: {lat: 0, lng: 0}};

  // The nested details component will render when the showDetails variable is set to true
  showDetails = false;
  // The selectedLocation object will hold the location information when the user clicked on a marker of a saved location
  selectedLocation = {};  

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {}

  ngOnInit() {
    // Get the user information from the database if the username is stored in sessionStorage,
    // otherwise redirect to the login page
    let sessionUsername = sessionStorage.getItem('username');
    this._route.params.subscribe((params: Params) => {
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
        this.markers.push(data['data']['locations'][i].coordinates)
      }         
    })
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

  // Show the save location form, pre-populating with the city, state, country, and coordinates of the marked location
  addMarker(lat: number, lng: number) {
    // Clear the previous details display, if any, when the user selects a new location on the map to add
    this.showDetails = false;
    this.selectedLocation = {};
    // console.log("Lat: ", lat)
    // console.log("Long: ", lng)
    this.markers.push({ lat, lng, alpha: 0.6 });
    // Set the variable showForm to true which will display the form to save this new location
    this.showForm = true;
    this.newLocation.coordinates.lat = lat;
    this.newLocation.coordinates.lng = lng;    
    // Get the city, state and country information from the OSM API
    let tempObservable = this._httpService.getAddress(lat, lng);
    tempObservable.subscribe(data => {
      // Define the city, state, country of the clicked location from the OSM API
      // Allow for the city to be classified as a town, village or other
      console.log(data);
      if(data['address'].city){
        this.newLocation.city = data['address'].city;
      }else if(data['address'].town){
        this.newLocation.city = data['address'].town;
      }else if(data['address'].village){
        this.newLocation.city = data['address'].village; 
      }else if(data['address'].suburb){
        this.newLocation.city = data['address'].suburb;
      }else if(data['address'].hamlet){
        this.newLocation.city = data['address'].hamlet;
      }else if(data['address'].county){
        this.newLocation.city = data['address'].county;
      }else{
        this.newLocation.city = 'City';
      }
      if(data['address'].state){
        this.newLocation.state = data['address'].state;
      }
      if(data['address'].country){
        this.newLocation.country = data['address'].country;
      }       
    })    
  }

  onAddLocation(){
    console.log("#2 In onAddLocation method:", this.username, this.newLocation);
    let tempObservable = this._httpService.addLocation(this.username, this.newLocation);
    tempObservable.subscribe(resp => {
      // console.log("#6 back in onAddLocation method", this.username);
      // Refresh the dashboard component and map after saving the new location
      this._router.navigateByUrl('', {skipLocationChange: true}).then(()=>
        this._router.navigate(['user/'+this.username]));
    });
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
