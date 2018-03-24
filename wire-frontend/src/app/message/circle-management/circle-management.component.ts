import { Component, OnInit, Input } from '@angular/core';

import {UserService} from '../../user.service';
import { iUser } from "../user/iuser";
import { FormGroup, Validators, FormControl } from "@angular/forms";


@Component({
  selector: 'app-circle-management',
  templateUrl: './circle-management.component.html',
  styleUrls: ['./circle-management.component.css',
              './createNewCircle.css']
})
  
  
export class CircleManagementComponent implements OnInit {

  @Input() typeOfForm : string = '';
  listOfUsers_val: string='';
  
  createUserForm;
  
  users: iUser[];
  
  
  
  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    
      this.createUserForm = new FormGroup({
      field_circleName : new FormControl("", Validators.required),
      field_circlePurpose : new FormControl(""),
      field_listOfUsers : new FormControl("")
    });
    
  }
  
  onClickUserSearchButton() {
    let thisLogin_user = sessionStorage.getItem('login_user');
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      //remove loggin in user from the user list
      let loopCount = 0;
      for (let _user of this.users) {
        if(_user.username === thisLogin_user) {
            this.users.splice(loopCount,1);
        }
        loopCount++;
      }
    })

  }
  
  onClickselectUser = function(user) {
    //console.log(user);
    
    this.listOfUsers_val = this.listOfUsers_val + user + ", ";
    
    
  }
  
  onSubmitCreateUser = function(abc) {
    
      console.log(this.createUserForm.controls['field_circleName'].value);
      console.log(this.createUserForm.controls['field_circlePurpose'].value);
      console.log(this.createUserForm.controls['field_listOfUsers'].value);
    

    
//        let userJSON = {'username' : this.createUserForm.controls['userName'].value , 
//                        'password' : this.createUserForm.controls['password'].value,
//                        'name' : this.createUserForm.controls['fullName'].value};

    
//            this.router.navigate(['message']);

    
  }
  
  
  

}
