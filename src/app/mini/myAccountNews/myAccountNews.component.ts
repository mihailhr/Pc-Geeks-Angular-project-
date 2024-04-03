import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-myAccountNews',
  templateUrl: './myAccountNews.component.html',
  styleUrls: ['./myAccountNews.component.css']
})
export class MyAccountNewsComponent implements OnInit {

  constructor(private httpClient:HttpClient, public userInfo:UserInfoService) { }
  allNews:GetNewsInterface={}
  keys:string[]=[]
  indexToRemove:number=0
  finalKeys:string[]=[]
  ngOnInit() {
    this.httpClient.get<GetNewsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/news.json").subscribe({
    next:result=>{
    this.allNews=result
     this.keys=Object.keys(result)
    
    for(let key of this.keys){
      
      if(this.userInfo.currentUser===this.allNews[key].user){
        this.finalKeys.push(key)
          
      }else{
        
        // this.indexToRemove=this.keys.indexOf(key)
        
        // this.keys=this.keys.splice(this.indexToRemove,1)
        
        
      }
    }
  },
error(err) {
  console.log(`Error:${err}`)
    alert("Error occured")
},})
  }

}
