import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardUserService implements CanActivate {

  constructor(public userInfo:UserInfoService, private router:Router) { }


  canActivate(): boolean {
  
    if (this.userInfo.userLoggedIn) {
      console.log("yes")
      
      this.router.navigate(['home']); 
      return false; 
    }
   
    return true;
  }

  
}


