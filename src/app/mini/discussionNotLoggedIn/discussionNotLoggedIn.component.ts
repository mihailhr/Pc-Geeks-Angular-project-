import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-discussionNotLoggedIn',
  templateUrl: './discussionNotLoggedIn.component.html',
  styleUrls: ['./discussionNotLoggedIn.component.css']
})
export class DiscussionNotLoggedInComponent  {

  constructor(public userInfo:UserInfoService) { }



}
