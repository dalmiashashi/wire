import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  private GET_USERS_URL = 'http://localhost:8081/api/user';
  private GET_USERS_AUTHONTICATION = 'http://localhost:8081/api/authenticate';
  private GET_USERS_TOKEN = 'http://localhost:8089/login';

  headerObj : any;
  
  
  validateUser(thisUser) {

    console.log(thisUser);
    

    this.http.post(this.GET_USERS_TOKEN, thisUser)
      .map(res => {
        console.log(res)
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status));

      }).subscribe(sub => {
        console.log("sub ==> " + sub.json().token);
        sessionStorage.setItem('token',sub.json().token);
        sessionStorage.setItem('login_user',thisUser.username);
      })

    
    this.headerObj = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};
    
    
    return this.http.post(this.GET_USERS_AUTHONTICATION, thisUser, { headers: this.headerObj })
      .map(res => "success")
      .catch((error: any) => {
        return Observable.throw(new Error(error.status));

      })
    
  }

  getUsers() {
    return this.http.get(this.GET_USERS_URL, { headers: this.headerObj })
      .map(res => res.json())
  }

  createUser(thisUser) {
    console.log(thisUser);

    return this.http.post(this.GET_USERS_URL, thisUser, { headers: this.headerObj })
      .map(res => "success")
      .catch((error: any) => {
        return Observable.throw(new Error(error.status));

      })
  }
}
