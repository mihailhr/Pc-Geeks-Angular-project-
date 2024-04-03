import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-postNews',
  templateUrl: './postNews.component.html',
  styleUrls: ['./postNews.component.css']
})
export class PostNewsComponent  {

  constructor( public userInfo:UserInfoService, private httpClient:HttpClient, private router:Router) { }
  postObj={
    user:"",
    title:"",
    description:""
  }
  onSubmitNews(event:Event,title:string,description:string){
    event.preventDefault()
    
    this.postObj.user=this.userInfo.currentUser
    this.postObj.title=title
    this.postObj.description=description
    console.log(this.postObj)
    this.httpClient.post("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news.json",this.postObj).subscribe({
    next:result=>{
      console.log(result)
    },
    error(err) {
      console.log(`Error: ${err}`)
      alert("Error occured")
    },          
  
  })
    
    const form = document.getElementById('myForm') as HTMLFormElement;
      if (form) {
        form.reset();
      }
      this.router.navigate(["successfulPost"])
  
      
  }

}
