import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-guestAccount',
  templateUrl: './guestAccount.component.html',
  styleUrls: ['./guestAccount.component.css']
})
export class GuestAccountComponent implements OnDestroy  {

  countdown:number = 12;
  private countdownInterval:ReturnType<typeof setTimeout>  
  
  constructor(private router: Router, public userInfo:UserInfoService) {
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval);
        this.router.navigate(['registerPage']); 
      }
    }, 1000); 
    // 1000 here is the frequency of execution
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval); 
  }
}
  
  


