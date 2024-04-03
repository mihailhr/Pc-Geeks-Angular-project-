import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GetDiscussionsInterface } from 'src/app/interfaces/getDiscussionsInterface';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})


export class DiscussionsComponent  {
  

constructor(public userInfo:UserInfoService){}


}
