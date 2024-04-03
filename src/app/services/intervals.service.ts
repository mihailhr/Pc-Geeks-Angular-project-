import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
countdown:number=0
countdownInterval!:ReturnType<typeof setInterval> 
// Nodejs.timeout
constructor(public router:Router) { }

generalInterval(countdownGiven:number,path:string){
  this.countdown=countdownGiven
  this.countdownInterval = setInterval(() => {
    this.countdown--;
    if (this.countdown === 0) {
      this.intervalClear()
      // clearInterval(this.countdownInterval); Would also work, but in all the redirect components .IntervalClear is used
      this.router.navigate([path]); 
    }
  }, 1000); 
}
discussionInterval(){
  this.generalInterval(7,"discussions")
}

newsInterval(){
  this.generalInterval(7,"news")
}

ratingInterval(){
  this.generalInterval(7,"myAccount")
}

intervalClear(){
  clearInterval(this.countdownInterval);
}



}
