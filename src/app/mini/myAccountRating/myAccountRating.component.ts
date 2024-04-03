import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetRatingsInterface } from 'src/app/interfaces/getRatingsInterface';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myAccountRating',
  templateUrl: './myAccountRating.component.html',
  styleUrls: ['./myAccountRating.component.css']
})
export class MyAccountRatingComponent implements OnInit {

  constructor(private httpClient:HttpClient, public userInfo:UserInfoService, private router:Router ) { }
  // Rating start
currentRatings:GetRatingsInterface={}
match:boolean=false
currentAverage:number=0
baseLink:string="https://pc-geeks-8a830-default-rtdb.europe-west1.firebasedatabase.app/ratings"
addOnLink:string=""
// Rating end



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


