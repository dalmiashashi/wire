import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CircleService {  
  
  constructor(private http: Http ) { }
  
  private GET_CIRCLES = 'http://localhost:8083/api/circle';
  private POST_CIRCLES = 'http://localhost:8083/api/circle';
  
    headerObj : any;


  
  getCircles() {
    
   this.headerObj = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

    console.log(this.headerObj);
    
    return this.http.get(this.GET_CIRCLES, { headers: this.headerObj })
      .map(res => res.json())
  }


  createCircle(circle) {
    
   this.headerObj = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

    console.log(this.headerObj);
    
    return this.http.post(this.POST_CIRCLES, circle, { headers: this.headerObj })
      .map(res => res.json())
  }


}
