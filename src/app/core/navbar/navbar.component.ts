import { ChangeDetectorRef, Component } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userInfo:UserInfoService,private cdr:ChangeDetectorRef){}
 
  

}
