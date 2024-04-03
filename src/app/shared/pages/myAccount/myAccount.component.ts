import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { GetDiscussionsInterface } from 'src/app/interfaces/getDiscussionsInterface';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { GetRatingsInterface } from 'src/app/interfaces/getRatingsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';


@Component({
  selector: 'app-myAccount',
  templateUrl: './myAccount.component.html',
  styleUrls: ['./myAccount.component.css']
})
export class MyAccountComponent   {

  constructor(private httpClient:HttpClient, public userInfo:UserInfoService,private fireStore:AngularFireModule, private router:Router ) { }
  
  

}  


