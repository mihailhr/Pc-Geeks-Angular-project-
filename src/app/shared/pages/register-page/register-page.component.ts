import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersInterface } from 'src/app/interfaces/getUsersInterface';

import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  
})
export class RegisterPageComponent implements OnInit{
    emailRegex:RegExp=/^[^@]+@[^@]+\.[^@]+$/
    existingUsers:GetUsersInterface={}
    existingUsersKeys:string[]=[]
    existingUserMatch:boolean=false
    existingProblems:boolean=false
constructor(private router:Router,private userInfo:UserInfoService,private httpClient:HttpClient){}

ngOnInit(): void {
  this.httpClient.get<GetUsersInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/users.json").subscribe({
    next:result=>{
    console.log(result)
    this.existingUsers=result
    this.existingUsersKeys=Object.keys(this.existingUsers)
},
error(err) {
  console.log(`Error occured: ${err}`)
  alert("Error ocurred")
}})

}
clickHandler(){
  this.router.navigate(["signInPage"])
}

passField=document.getElementById("rePass")
obj={email:'',password:''}
onSubmit(event: Event,email:string,password:string,rePass:string){
  event.preventDefault()
  document.getElementById("password")?.classList.remove(`error-border`)
  document.getElementById("rePass")?.classList.remove(`error-border`)
  document.getElementById("email")?.classList.remove(`error-border`)
  this.existingProblems=false
  if(!this.emailRegex.test(email)){
    document.getElementById("email")?.classList.add('error-border')
    this.existingProblems=true
    console.log("didnt pass")
    return
  }
  
  if(password.length<8){
    document.getElementById("password")?.classList.add('error-border')
    this.existingProblems=true
    
    return
    
  } if(password!==rePass){
    document.getElementById("rePass")?.classList.add('error-border')
    this.existingProblems=true
    
    return
    
    
  } if(this.existingProblems===false){
    
    this.obj.email=email
    this.obj.password=password
    for(let key of this.existingUsersKeys){
      if(this.existingUsers[key].email===email){
          this.existingUserMatch=true
          alert("This email is already used")
          return
      }

    }
    this.httpClient.post("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/users.json",this.obj).subscribe({
    next:result=>{
      this.userInfo.signIn(email)
    this.userInfo.currentUserSet(email)
    }  
    ,error(err) {
        console.log(`Error occured: ${err}`)
        alert("Error ocurred")
      },
    })
    
    this.router.navigate(["home"])

    
    
  }
 

}
}
