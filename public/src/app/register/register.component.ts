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
  errors = [];
  register={confirm_pass:''}
 

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  });
  }
  onRegister(){
    if(this.registerUser.password !== this.register.confirm_pass){
      this.errors = [];
      this.errors.push("The passwords do not match");
      console.log("error: ", this.errors)
    }
    console.log("#2: In login component ts", this.registerUser);
    let tempObservable = this._httpService.registerThisUser(this.registerUser);
    tempObservable.subscribe(data => {
      console.log(" #6 Register component got the new user", data);
    this.errors = [];
    if(data['message'] === 'error'){
      console.log("This is our error data ", data);
      var errorsResponse = data['errors']['errors']

      for(var key in errorsResponse){
        var errString = key + '-' + errorsResponse[key]['message']
        this.errors.push(errString)
      }
      if(data['errors']['code'] === 11000){
        this.errors.push("This username/email already exist")
      } 
    } else {
      this._router.navigate(['user/' + data['username']])
    }

    })
  }
  goHome() {
    this._router.navigate(['']);
  }
 

}
