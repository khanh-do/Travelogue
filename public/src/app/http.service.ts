import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  loginThisUser(user){
    // console.log("#3 in http.service.ts user: ", user);
    return this._http.post('/login', user);
  }

  registerThisUser(user){
    // console.log("#3 in http.service.ts user: ", user);
    return this._http.post('/create', user);
  }

  getThisUser(username){
    // console.log("#3 in http.service.ts username: ", username);
    return this._http.get('/userInfo/' + username);
  }

}
