
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from "@angular/router";

import { User} from '../message/user/user'
import { UserService } from "../user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm;
  localUser : User;

  
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit() {
    
    this.registrationForm = new FormGroup({
      userName : new FormControl("", Validators.required),
      password : new FormControl(""),
      password2 : new FormControl(""),
      fullName : new FormControl("")
    });
  }

  onSubmit = function(user) {
    
    let userJSON = {'username' : this.registrationForm.controls['userName'].value , 
                    'password' : this.registrationForm.controls['password'].value,
                    'name' : this.registrationForm.controls['fullName'].value};
    
    
    this.userService.createUser(userJSON).subscribe(
      res => {
        console.log(res);
        this.onClickResul = 'GOOD';
        this.router.navigate(['']);
        },
      err => { 
        console.log("->"+err)
        this.onClickResul = 'BAD';
        });

    
  }
  
  
}
