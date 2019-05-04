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

  getAddress(lat, long){
    console.log("#3 in http.service.ts lat lng: ", lat, long);
    return this._http.get('https://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+long+'&zoom=18&addressdetails=1');
  }

  addLocation(username, locationToAdd){
    console.log("#3 in http.service.ts location: ", locationToAdd)
    return this._http.put('/userInfo/' + username, locationToAdd);
  }

}
