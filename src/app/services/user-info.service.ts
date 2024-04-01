import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
constructor(){}
  userLoggedIn:boolean=false
  currentUser:string=""
  
  checkStorage(){
    let alreadyLogged=sessionStorage.getItem("user")
    if(alreadyLogged){
      this.signIn(alreadyLogged)
    }
  }


  signIn(user:string){
    this.userLoggedIn=true
    this.currentUserSet(user)
    sessionStorage.setItem("user",user)
  }

  signOut(){
    this.userLoggedIn=false
    this.currentUserDelete()
    sessionStorage.clear()
  }
  currentUserSet(newName:string){
    this.currentUser=newName
  }
  currentUserDelete(){
    this.currentUser=""
  }
  

}
