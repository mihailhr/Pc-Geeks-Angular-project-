import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent {
  constructor(public userInfo:UserInfoService,private router:Router){}
signOut(){
  this.userInfo.signOut()
  this.userInfo.currentUserDelete()
  this.router.navigate(["home"])
}
}
