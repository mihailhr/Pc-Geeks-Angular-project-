import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetDiscussionsInterface } from 'src/app/interfaces/getDiscussionsInterface';
@Component({
  selector: 'app-discussionLogs',
  templateUrl: './discussionLogs.component.html',
  styleUrls: ['./discussionLogs.component.css']
})
export class DiscussionLogsComponent implements OnInit {

  constructor(public userInfo:UserInfoService, private httpClient:HttpClient, private router:Router){}
  allDiscussions:GetDiscussionsInterface={}
  
  keys:string[]=[]
  indexToRemove:number=0
  finalKeys:string[]=[]
ngOnInit(): void {
  this.httpClient.get<GetDiscussionsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/discussions.json").subscribe({
    next:result=>{
      console.log(result)
    this.allDiscussions=result;
     this.keys=Object.keys(result);
    },
    error(err) {
      console.error('An error occurred while fetching discussions:', err)
      alert(`Error occured - unsuccessful fetch of The Discussion contributions`)
    },


  // console.log(result)
  //   this.allDiscussions=result;
  //    this.keys=Object.keys(result);
    
    
  })
}
}
