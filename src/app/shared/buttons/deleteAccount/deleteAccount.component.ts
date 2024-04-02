import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { GetUsersInterface } from 'src/app/interfaces/getUsersInterface';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-deleteAccount',
  templateUrl: './deleteAccount.component.html',
  styleUrls: ['./deleteAccount.component.css']
})
export class DeleteAccountComponent  {
  existingUsers:GetUsersInterface={}
  existingUsersKeys:string[]=[]
  existingNews:GetNewsInterface={}
  existingNewsKeys:string[]=[]



  constructor(public userInfo:UserInfoService,private httpClient:HttpClient, private router:Router) { }
  ngOnInit(): void {
    this.httpClient.get<GetUsersInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/users.json").subscribe(result=>{
      console.log(result)
      this.existingUsers=result
      this.existingUsersKeys=Object.keys(this.existingUsers)
  })
  this.httpClient.get<GetNewsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news.json").subscribe(result=>{
      console.log(result)
      this.existingNews=result
      this.existingNewsKeys=Object.keys(this.existingNews)
  })
  }

   deleteAccount(){
    if(window.confirm("Are you sure? Deleting your account will also remove all the news that you have published!")){
    for(let key of this.existingNewsKeys){
      if(this.userInfo.currentUser===this.existingNews[key].user){
        this.httpClient.delete("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news/"+key+".json").subscribe(result=>console.log(result))
        
      }
  }


      for(let key of this.existingUsersKeys){
          if(this.userInfo.currentUser===this.existingUsers[key].email){
            this.httpClient.delete("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/users/"+key+".json").subscribe(result=>console.log(result))
            this.userInfo.signOut()

            alert("You have successfully deleted your account.")
            this.router.navigate(["home"])
          }
      }
   }}


}
