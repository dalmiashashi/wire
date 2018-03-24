import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  userName : string;
  circleName : string;
  loggedInUser : string;
  
  headerObj : any;
  
  
  constructor(private http: Http ) {
  
    this.loggedInUser = sessionStorage.getItem('login_user');
    this.headerObj = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};
   }
  
//  private GET_USERS_MESSAGES = 'http://localhost:8084/api/message/getMessagesByUser/shashi/harshit/1';
  private GET_MESSAGES_BASE_URL = 'http://localhost:8084/api/message/';

  
  getMessagesFromUser(userName : any) {
    

    
    return this.http.get(this.GET_MESSAGES_BASE_URL+'/getMessagesByUser/'+this.loggedInUser+'/'+userName+'/1', { headers: this.headerObj })
      .map(res => res.json())
  }
  
    getMessagesByCircle(circleName : any) {
    
    console.log(circleName);
    
    
    return this.http.get(this.GET_MESSAGES_BASE_URL+'/getMessagesByCircle/'+circleName+'/1', { headers: this.headerObj })
      .map(res => res.json())
  }
  
  sendMessageToCircle(message: any) {
    
    
    return this.http.post(this.GET_MESSAGES_BASE_URL+'/sendMessageToCircle/'+message.circleName, message, { headers: this.headerObj })
      .map(res => res.json())
    
  }
  
  sendMessageToUser(message: any) {
    
    let thisUserName = message.receiverId;
    
    return this.http.post(this.GET_MESSAGES_BASE_URL+'sendMessageToUser/'+thisUserName, message, { headers: this.headerObj })
      .map(res => res.json())
    
  }

  
  
  
}
