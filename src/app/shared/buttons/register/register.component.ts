import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private router:Router,public userInfo:UserInfoService){}
  
  registerClick(){
    this.router.navigate(['/registerPage'])
    
  }
}
