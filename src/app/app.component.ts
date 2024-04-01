import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './services/user-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
  constructor(private userInfo:UserInfoService){}
   ngOnInit(): void {
     this.userInfo.checkStorage()
   }
}
