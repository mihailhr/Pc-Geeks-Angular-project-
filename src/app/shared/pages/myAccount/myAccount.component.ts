import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { GetDiscussionsInterface } from 'src/app/interfaces/getDiscussionsInterface';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { GetRatingsInterface } from 'src/app/interfaces/getRatingsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';


@Component({
  selector: 'app-myAccount',
  templateUrl: './myAccount.component.html',
  styleUrls: ['./myAccount.component.css']
})
export class MyAccountComponent implements OnInit  {

  constructor(private httpClient:HttpClient, public userInfo:UserInfoService,private fireStore:AngularFireModule, private router:Router ) { }
  // Rating start
currentRatings:GetRatingsInterface={}
match:boolean=false
currentAverage:number=0
baseLink:string="https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/ratings"
addOnLink:string=""
// Rating end

// News start
allNews:GetNewsInterface={}
keys:string[]=[]
indexToRemove:number=0
finalKeys:string[]=[]

// News end
// Discussion start
allDiscussions:GetDiscussionsInterface={}
keysDiscussion:string[]=[]

finalKeysDiscussion:string[]=[]
// Discussion end
ngOnInit(): void {
   // Rating start
  this.httpClient.get<GetRatingsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/ratings.json").subscribe({
    next:result=>{
    this.currentRatings=result;
   
    for(let key of Object.keys(this.currentRatings)){
      this.currentAverage+=Number(this.currentRatings[key].rating)
      if(this.userInfo.currentUser===this.currentRatings[key].user){
        this.match=true
        this.addOnLink=key
      }
    }
    
    this.currentAverage=Number((this.currentAverage/Object.keys(this.currentRatings).length).toFixed(2))
  
  },
  error(err) {
    console.log(`Error:${err}`)
    alert("Error occured")
  },

})
  // Rating end

  // News start
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

    // Discussion start
    this.httpClient.get<GetDiscussionsInterface>("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/discussions.json").subscribe({
    next:result=>{
    this.allDiscussions=result
     this.keysDiscussion=Object.keys(result)
    
    for(let key of this.keysDiscussion){
      
      if(this.userInfo.currentUser===this.allDiscussions[key].user){
        this.finalKeysDiscussion.push(key)
          
      }else{
        
        // this.indexToRemove=this.keys.indexOf(key)
        
        // this.keys=this.keys.splice(this.indexToRemove,1)
        
        
      }
    }
    
  
  
  
  },
error(err) {
  console.log(`Error:${err}`)
    alert("Error occured")
}})
  // News end

}  
// Rating start
ratingSubmit(event:Event,rating:string){
  if(this.match==false){
  this.httpClient.post("https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/ratings.json",{user:this.userInfo.currentUser,rating}).subscribe({
    error(err) {
      console.log(`Error:${err}`)
    alert("Error occured")
    },
  })
}else{
  
  this.httpClient.put(this.baseLink+"/"+this.addOnLink+"/rating.json",rating).subscribe({
    error(err) {
      console.log(`Error:${err}`)
    alert("Error occured")
    },
  })
}
this.router.navigate(["ratingChange"])
}
// Rating end
}

