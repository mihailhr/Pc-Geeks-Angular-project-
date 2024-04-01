import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetExistingNewsInterface } from 'src/app/interfaces/GetExistingNewsInterface';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { UpdateNewsService } from 'src/app/services/updateNews.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-newsEdit',
  templateUrl: './newsEdit.component.html',
  styleUrls: ['./newsEdit.component.css']
})
export class NewsEditComponent implements OnInit  {
  constructor(public userInfo:UserInfoService, private updateNews:UpdateNewsService, private httpClient:HttpClient, private router:Router) { }
  newsKey=this.updateNews.updatableNewsKey
  currentState:GetExistingNewsInterface={description:"",title:"",user:""}
  titleValue:string=""
  descriptionValue:string=""
  initialTitle:string=""
  initialDescription:string=""

  ngOnInit(): void {
    this.httpClient.get<GetExistingNewsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news/"+this.newsKey+".json").subscribe({
    next:response=>{ 
    console.log(response)
    this.currentState=response
    this.initialTitle=this.currentState["title"]
    this.initialDescription=this.currentState["description"]
    this.titleValue=this.currentState["title"]
    this.descriptionValue=this.currentState["description"]
    
  },
error(err) {
  console.log(`Error:${err}`)
  alert("Error occured") 
}})
  }
  onSubmitNews(event:Event, title:string, description:string){
   event.preventDefault()
   if(this.initialTitle==this.titleValue && this.initialDescription==this.descriptionValue){
      alert("Please make some changes")
      return
   }else{
    this.httpClient.put("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news/"+this.newsKey+".json",{"description":description,"title":title,"user":this.userInfo.currentUser}).subscribe({
    next:result=>{  
    console.log(result)
    this.router.navigate(["successfulPost"])},
    error(err) {
    console.log(`Error:${err}`)
    alert("Error occured")
    
  }})
    
  }
 
  }
 

}
