import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateNewsService } from 'src/app/services/updateNews.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { GetExistingNewsInterface } from 'src/app/interfaces/GetExistingNewsInterface';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
allNews:GetNewsInterface={}
allMyNews:GetNewsInterface={}
keys:string[]=[]
indexToRemove:number=0
finalKeys:string[]=[]
constructor(public userInfo:UserInfoService,private httpClient:HttpClient,private router:Router, private updatableNews:UpdateNewsService){}
postObj={
  user:"",
  title:"",
  description:""
}
ngOnInit(): void {
  
    this.httpClient.get<GetNewsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news.json").subscribe({
    next:result=>{
    this.allNews=result;
    this.allMyNews=result
    this.keys=Object.keys(this.allMyNews)
    
    console.log(this.allNews)
    

    for(let key of this.keys){
      
      if(this.userInfo.currentUser===this.allMyNews[key].user){
        this.finalKeys.push(key)
        console.log(this.allMyNews[key])
          
      }

    }
    console.log(this.keys)
    console.log(this.finalKeys)},
    error(err) {
      console.log(`Error occured: ${err}`)
      alert(`Error ocurred`)
    },
})
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

getObjectEntries(obj: GetNewsInterface): [string, GetExistingNewsInterface][] {
  console.log(Object.entries(obj))
  return Object.entries(obj);
}

deleteHandler(key:string){
  
  if(window.confirm("Are you sure wou want to delete this publication?")){
    console.log(`Clicked ${key}`)
    this.httpClient.delete("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news/"+key+".json").subscribe({
    next:result=>{  
    {console.log(result)}
    this.router.navigate(["successfulPost"])},
    error(err) {
      console.log(`Error: ${err}`)
    alert("Error occured")
    },
    })
  }
  
}
editHandler(key:string){
  this.updatableNews.setNewsKey(key)
this.router.navigate(["newsEdit"])
}

}
