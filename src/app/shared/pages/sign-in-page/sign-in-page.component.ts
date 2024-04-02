import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersInterface } from 'src/app/interfaces/getUsersInterface';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {
constructor(private router:Router,private userInfo:UserInfoService, private httpClient:HttpClient){}
clickHandler(){
  this.router.navigate(["registerPage"])
}
currUsers:GetUsersInterface={}
found:boolean=false
onSubmit(event:Event,email:string,password:string,){
  event.preventDefault()
  this.httpClient.get<GetUsersInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/users.json").subscribe({
  next:response=>
  {this.currUsers=response;for(let user in this.currUsers){
    
    if(email===this.currUsers[user].email && password===this.currUsers[user].password){
     
     this.found=true
     this.userInfo.signIn(email)
     this.router.navigate(["home"])
     this.userInfo.currentUserSet(email)
     
    }
    
   }
   if(this.found==false){
     alert("Invalid sign in credentials")
    }},
  error(err) {
   console.log(`Error ucooured: ${err}`)
   alert("Error occured")
  },})
  
  
 
}
}
