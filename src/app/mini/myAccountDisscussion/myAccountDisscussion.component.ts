import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDiscussionsInterface } from 'src/app/interfaces/getDiscussionsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-myAccountDisscussion',
  templateUrl: './myAccountDisscussion.component.html',
  styleUrls: ['./myAccountDisscussion.component.css']
})
export class MyAccountDisscussionComponent implements OnInit {
  allDiscussions:GetDiscussionsInterface={}
  keysDiscussion:string[]=[]
  constructor(private httpClient:HttpClient, public userInfo:UserInfoService){}
  finalKeysDiscussion:string[]=[]
  ngOnInit() {
  
  this.httpClient.get<GetDiscussionsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/discussions.json").subscribe({
    next:result=>{
    this.allDiscussions=result
     this.keysDiscussion=Object.keys(result)
    
    for(let key of this.keysDiscussion){
      
      if(this.userInfo.currentUser===this.allDiscussions[key].user){
        this.finalKeysDiscussion.push(key)
          
      }
    }

},
error(err) {
  console.log(`Error occured: ${err}`)
  alert("Error occured")
},})}}
