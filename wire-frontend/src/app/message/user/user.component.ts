import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';

import {UserService} from '../../user.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: User[];
  @Output() selectedUser = new EventEmitter<any>();
  
  

  constructor( private modalService: NgbModal, private userService: UserService ) { }

  closeResult: string;

  selectUser(userName: string) {
    console.log("User Name Clicked : " + userName);
    
    let currentUserName= {
      type: 'user',
      value: userName
    }
    this.selectedUser.emit(currentUserName);
  }

  
  ngOnInit() {
    
    let thisLogin_user = sessionStorage.getItem('login_user');
    
    this.userService.getUsers().subscribe((users) => {
      console.log("GGGGGGGGGGGGGG===> " + users);
      this.users = users;
      
      //remove loggin in user from the user list
      let loopCount = 0;
      for (let _user of this.users) {
        //console.log(_user.username);
        
        if(_user.username === thisLogin_user) {
            this.users.splice(loopCount,1);
        }
        
        loopCount++;
      }
            
    })
    
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


interface User {
  username: string;
  name: string;
  password: string;
}