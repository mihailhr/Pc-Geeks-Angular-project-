import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntervalsService } from 'src/app/services/intervals.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-successfulContribution',
  templateUrl: './successfulContribution.component.html',
  styleUrls: ['./successfulContribution.component.css']
})
export class SuccessfulContributionComponent implements OnDestroy  {
 

  countdown = 8;
 
    
  
  
  constructor(private router: Router, public userInfo:UserInfoService, private intervalService:IntervalsService) {
    intervalService.discussionInterval()
  }

  ngOnDestroy(): void {
    this.intervalService.intervalClear()
  }
}


