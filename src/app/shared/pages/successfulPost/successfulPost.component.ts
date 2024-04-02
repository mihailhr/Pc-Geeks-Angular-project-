import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntervalsService } from 'src/app/services/intervals.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-successfulPost',
  templateUrl: './successfulPost.component.html',
  styleUrls: ['./successfulPost.component.css']
})
export class SuccessfulPostComponent implements OnDestroy {

  
  
  constructor(private router: Router, public userInfo:UserInfoService, private intervalsService:IntervalsService) {
    intervalsService.newsInterval()
  }

  ngOnDestroy(): void {
    this.intervalsService.intervalClear()
  }
}
  

