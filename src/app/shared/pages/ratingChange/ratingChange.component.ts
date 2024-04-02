import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Router } from '@angular/router';
import { IntervalsService } from 'src/app/services/intervals.service';
@Component({
  selector: 'app-ratingChange',
  templateUrl: './ratingChange.component.html',
  styleUrls: ['./ratingChange.component.css']
})
export class RatingChangeComponent implements OnDestroy {

  constructor(private router:Router, public userInfo:UserInfoService, private intervalsService:IntervalsService) { 
    intervalsService.ratingInterval()
  }

  ngOnDestroy(): void {
    this.intervalsService.intervalClear()
  }

}
