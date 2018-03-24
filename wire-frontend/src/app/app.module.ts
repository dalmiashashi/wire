import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CircleService } from './circle.service';
import { UserComponent } from './message/user/user.component';
import { MessageComponent } from './message/message.component';

import { UserService } from './user.service';
import { MessageService } from './message.service';
import { CircleComponent } from './message/circle/circle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsercircleService } from "./usercircle.service";
import { CircleManagementComponent } from './message/circle-management/circle-management.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageComponent,
    CircleComponent,
    LoginComponent,
    RegisterComponent,
    CircleManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [UserService, MessageService, CircleService, UsercircleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
