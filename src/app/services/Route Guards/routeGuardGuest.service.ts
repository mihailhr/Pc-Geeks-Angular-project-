import { Injectable } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuestService implements CanActivate {

  constructor(public userInfo:UserInfoService, private router:Router) { }


  canActivate(): boolean {
    if (this.userInfo.userLoggedIn) {
      return true;
    } else {
      this.router.navigate(['signInPage']); 
      return false;
    }
  }
  

}
