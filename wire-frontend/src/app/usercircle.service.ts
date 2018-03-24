import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsercircleService {

  constructor(private http: Http) { }

  private GET_USER_CIRCLES = 'http://localhost:8082/api/usercircle/searchByUser/';
  
  headerObj : any;
  
  getUserCircles() {
    
    this.headerObj = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

    console.log(this.headerObj);
    let thisLoggedInUser = sessionStorage.getItem("login_user");
    
//    return this.http.get(this.GET_USER_CIRCLES + thisLoggedInUser, { headers: this.headerObj })
//      .map(res => res.json())
    return this.http.get(this.GET_USER_CIRCLES + thisLoggedInUser, { headers: this.headerObj })
      .map(res => res.text())
  }
    
}
