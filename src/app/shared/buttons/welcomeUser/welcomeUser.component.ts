import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-welcomeUser',
  templateUrl: './welcomeUser.component.html',
  styleUrls: ['./welcomeUser.component.css']
})
export class WelcomeUserComponent  {

  constructor(public userInfo:UserInfoService,private router:Router) { }
  clickHandler(){
    this.router.navigate(["myAccount"])
  }
  clickHandlerGuest(){
    this.router.navigate(["guestAccount"])
  }

}
