import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from "@angular/router";

//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../user.service';
import { User} from '../message/user/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
@Injectable()
export class LoginComponent implements OnInit {

  userForm;
  localUser : User;
  onClickResul : string = '';
  userLoggedIn : any = false; 
  
  public edited = false;
  
  login_user : string = '';

  
  //private messageSource = new BehaviorSubject<string>("");
  //currentMessage = this.messageSource.asObservable();

  
  constructor(private userService : UserService, private router: Router) { }
  
  ngOnInit() {
    
    this.userForm = new FormGroup({
      userName : new FormControl("", Validators.required),
      password : new FormControl("")
    });
    
    this.login_user = '';

    
  }
  
  
  onFocus($event) {
    this.edited = false;
  }
  
  
  onSubmit = function(user) {
    
    console.log(this.userForm.controls['userName'].value);
    
    let userJSON = {'username' : this.userForm.controls['userName'].value , 
                    'password': this.userForm.controls['password'].value};
    
    
    this.userService.validateUser(userJSON).subscribe(
      res => {
        console.log(res);
        this.onClickResul = 'GOOD';
        this.router.navigate(['message']);
        },
      err => { 
        console.log("->" + err)
        this.onClickResul = 'BAD';
        this.edited=true;
        });
    
  }
 
/*
  changeMessage(message : string) {
    this.messageSource.next(message);
  }
  
  
  newLoggedInUser(loggedInUser : string) {
    this.changeMessage(loggedInUser);
  }
*/  
}
