import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // Receive the location and username from the dashboard component
  @Input () locationToShow: any;
  @Input () username: any;
  // Initialize an attraction object. This will receive values from the user through the details html component.  
  newAttraction = {name: '', rating: '', review: ''};
  // Since the rating value is received as a string, initialize a newAttractionToSave object
  // where the rating value will be converted to an integer. This object will be used to save the new attraction to the database.
  newAttractionToSave = {name: '', rating: 0, review: ''};
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() { }

  onAddAttraction(){
    console.log("#2 In onAddLocation method:", this.newAttraction);
    // Set the values of the object to be saved to the values of the bound object, after converting
    // the rating value to an integer.
    this.newAttractionToSave.name = this.newAttraction.name;
    this.newAttractionToSave.rating = parseInt(this.newAttraction.rating, 10);
    this.newAttractionToSave.review = this.newAttraction.review;
    console.log("#2 In onAddLocation method:", this.newAttractionToSave);
    console.log(this.username, this.locationToShow.coordinates);
    let tempObservable = this._httpService.addAttraction(this.username, this.locationToShow.coordinates, this.newAttractionToSave);
    tempObservable.subscribe(resp => {
      console.log("#6 back in onAddAttraction method", this.username);
      // Refresh the details component after saving the new attraction      
    });
  }
}
