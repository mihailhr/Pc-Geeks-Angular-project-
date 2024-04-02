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


export class DiscussionsComponent implements OnInit {
  allDiscussions:GetDiscussionsInterface={}
  
  keys:string[]=[]
  indexToRemove:number=0
  finalKeys:string[]=[]
  // [key:string]:{content:string,title:string,user:string}

constructor(public userInfo:UserInfoService, private httpClient:HttpClient, private router:Router){}

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
discussionSubmit(event:Event,title:string,content:string){
event.preventDefault()
this.httpClient.post("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/discussions.json",{user:this.userInfo.currentUser,title,content}).subscribe({
  next:result=>{
  console.log(result)
  this.router.navigate(["successfulContribution"])},
  error(err) {
    console.error('An error occurred while fetching discussions:', err)
      alert(`Error occured - your contribution to The Discussion was not successful`)
  },
})
}
}
