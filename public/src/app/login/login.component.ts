import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = { email: '', password: '' }
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    console.log("#2: In login component ts", this.loginUser);
    let tempObservable = this._httpService.loginThisUser(this.loginUser);
    tempObservable.subscribe(data => {
      console.log("#6 login component got the user", data);
      // Clear the errors array per every login attempt
      this.errors = [];
      if(data['message'] === 'Email is null'){
        this.errors.push("Please enter your login email.");
      }else if(data['message'] === 'User not found'){
        console.log("Going back home");
        this.errors.push("Email/Password combination is not valid.");
      }else if(data['message'] === 'Password is invalid'){
        this.errors.push("Email/Password combination is not valid.");
      }else if(data['message'] === 'Password is null'){
        console.log("No password");
        this.errors.push("Please enter your password.");
      } else if(data['message'] === "The passwords don't match."){
        console.log("Passwords don't match")
        this.errors.push("Email/Password combination is not valid.");
      } else {
        // console.log("username: ", data['data']['username']);
        var username = data['data']['username'];
        // upon successful login, save username to Window.sessionStorage
        sessionStorage.setItem('username', username);
        // then redirect to the user's dashboard
        this._router.navigate(['user/'+ username]);
      }      
    });
  }

  goHome() {
    this._router.navigate(['']);
  } 
}
