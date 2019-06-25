import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser = { first_name: '', last_name: '', username:'', email:'', password:''}
  // declare a variable to hold the confirm password field (compare against the user password)
  register = {confirm_pass:''} 
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
    });
  }

  onRegister(){
    if(this.registerUser.password !== this.register.confirm_pass || this.registerUser.password.length < 8){
      this.errors = [];
      if(this.registerUser.password !== this.register.confirm_pass){
        this.errors.push("The passwords do not match");
      }
      if(this.registerUser.password.length < 8){
        this.errors.push("Your password must contain at least 8 characters");
      }
    } else {
      console.log("#2: In login component ts", this.registerUser);
      let tempObservable = this._httpService.registerThisUser(this.registerUser);
      tempObservable.subscribe(data => {
        console.log(" #6 Register component got the new user", data);
        this.errors = [];
        if(data['message'] === 'error'){
          console.log("This is our error data ", data);
          var errorsResponse = data['errors']['errors'];
          for(var key in errorsResponse){
            var errString = errorsResponse[key]['message'];
            this.errors.push(errString);
          }
          if(data['errors']['code'] === 11000){
            this.errors.push("This username/email already exist");
          } 
        } else {
          console.log("username from registration: ", data['data']['username']);
          var username = data['data']['username'];
          sessionStorage.setItem('username', username);
          // this._router.navigate(['user/' + data['username']]);
          this._router.navigate(['user/', username]);
        }
      })
    }
  }
  goHome() {
    this._router.navigate(['']);
  }
}