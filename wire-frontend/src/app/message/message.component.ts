import { Component, OnInit, Input , OnChanges, EventEmitter } from '@angular/core';

import { MessageService } from '../message.service';
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
  

/*==========================================*/
/*  ------- Class: MessageComponent ------- */
/*==========================================*/
export class MessageComponent implements OnInit, OnChanges {

  addNewCircle;
  
  currentSelected: object;
  messageDisplayFor : string = '';
  messageType : string = '';
  message : any;
  type: string;
  operation : string = '';
  
  login_user = sessionStorage.getItem('login_user');


  
  messages : Message[];
  receiver: string;
  @Input() messageObj: object;
  
  options: object;
  
  loggedInUser: string;
  
  constructor(private messageService : MessageService) { }
/*  ------- ngOnInit ------- */
  ngOnInit() {
    /*
    this.options = {  weekday: "short", year: "numeric", month: "short",  
                      day: "numeric", hour: "2-digit", minute: "2-digit"  
                   };
  */
    this.options = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"  };
    
    //this.loginData.currentMessage.subscribe(message => this.loggedInUser = message)
    //console.log("I am logged in: "+this.loggedInUser);

  }
  
/*  ------- ngOnChanges ------- */
  ngOnChanges(value) {
  }
  
   /* -------- onSelect -------- */
    onSelect(data) {
      console.log(data.value);
      this.messageDisplayFor = data.value;
      
    this.messageType =  data.type;
      
    if( data.type === 'user') {
      
      this.messageService.getMessagesFromUser( data.value).subscribe((messages) => {
        this.messages = messages;  
        console.log(this.messages);
      }) 
    }
    else if( data.type === 'circle') {
      this.messageService.getMessagesByCircle(data.value).subscribe((messages) => {
        this.messages = messages;  
        console.log(this.messages);
      }) 
      
    }
  }
  
  

/*  ------- formatDate ------- */
  formatDate(indate : any) {

    let myDate = new Date(indate);
    
    return myDate.toLocaleTimeString("en-us", this.options);
  }
  
  
  
  /* -------- onClick -------- */
  onClick() {
    let receiverName : string = '';
    let circleName : string = '';
    
    
    
    if(this.messageType === 'circle')
      circleName = this.messageDisplayFor;
    else
       receiverName = this.messageDisplayFor;
    
    
    let messageJSON = { 
      'senderName' : this.login_user,
      'receiverId' : receiverName,
      'circleName' : circleName,
      'message' : this.message,
      'tag' : ''
    }
    
    
    if(this.messageType === 'circle') {
      this.messageService.sendMessageToCircle(messageJSON).subscribe(
      res => {
         console.log(res);
        
         let thisData = {
            type :'circle', 
            value : circleName
         }
        this.onSelect(thisData)
        
      },
      err => { 
        console.log("->" + err)
        });
    }
    else {
      this.messageService.sendMessageToUser(messageJSON).subscribe(
      res => {
          console.log(res);
           let thisData = {
              type :'user', 
              value : receiverName
           }
          this.onSelect(thisData)
        
        },
      err => { 
        console.log("->" + err)
        });
    }
    
    this.message = '';
    
  }
  
  /* -------- buttonClicked -------- */  
  buttonClicked(whichButtonClicked : any) {
    if(whichButtonClicked === 'addcircle') {
      if(this.operation === '') 
        this.operation = 'createCircle';
      else 
        this.operation = '';
    }
    
  }
  
}


/*=====================================*/
/*  ------- Interface: Message ------- */
/*=====================================*/
interface Message {
  messageId : number;
  senderName : string;
  receiverId : string;
  circleName : string;
  postedDate : any;
  streamType : string;
  message : string;
  tag : string;
}