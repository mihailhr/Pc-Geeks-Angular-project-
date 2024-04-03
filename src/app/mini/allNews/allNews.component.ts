import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GetExistingNewsInterface } from 'src/app/interfaces/GetExistingNewsInterface';
@Component({
  selector: 'app-allNews',
  templateUrl: './allNews.component.html',
  styleUrls: ['./allNews.component.css']
})
export class AllNewsComponent implements OnInit {

  constructor(private httpClient:HttpClient, public userInfo:UserInfoService) { }
  allNews:GetNewsInterface={}
  allMyNews:GetNewsInterface={}
  keys:string[]=[]
  indexToRemove:number=0
  finalKeys:string[]=[]
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
  getObjectEntries(obj: GetNewsInterface): [string, GetExistingNewsInterface][] {
    console.log(Object.entries(obj))
    return Object.entries(obj);
  }
  

}
