import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-discussionSubmit',
  templateUrl: './discussionSubmit.component.html',
  styleUrls: ['./discussionSubmit.component.css']
})
export class DiscussionSubmitComponent  {
  constructor(private httpClient:HttpClient, private router:Router, public userInfo:UserInfoService){}

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
