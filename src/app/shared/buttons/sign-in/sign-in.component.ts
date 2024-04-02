import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router:Router,public userInfo:UserInfoService){}

signInClick(){
  this.router.navigate(['/signInPage'])
  
}
}
