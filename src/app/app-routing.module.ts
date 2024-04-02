import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { DiscussionsComponent } from './core/discussions/discussions.component';
import { NewsComponent } from './core/news/news.component';
import { RegisterPageComponent } from './shared/pages/register-page/register-page.component';
import { SignInPageComponent } from './shared/pages/sign-in-page/sign-in-page.component';
import { MyAccountComponent } from './shared/pages/myAccount/myAccount.component';
import { GuestAccountComponent } from './shared/pages/guestAccount/guestAccount.component';
import { SuccessfulPostComponent } from './shared/pages/successfulPost/successfulPost.component';
import { SuccessfulContributionComponent } from './shared/pages/successfulContribution/successfulContribution.component';
import { RatingChangeComponent } from './shared/pages/ratingChange/ratingChange.component';
import { NewsEditComponent } from './shared/pages/newsEdit/newsEdit.component';
import { RouteGuardGuestService } from './services/Route Guards/routeGuardGuest.service';
import { RouteGuardUserService } from './services/Route Guards/routeGuardUser.service';


const routes: Routes = [
  {path:"",component:HomeComponent},
 
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"discussions",component:DiscussionsComponent},
  {path:"news",component:NewsComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"registerPage",component:RegisterPageComponent,canActivate:[RouteGuardUserService]},
  {path:"signInPage",component:SignInPageComponent,canActivate:[RouteGuardUserService]},
  {path:"myAccount",component:MyAccountComponent, canActivate:[RouteGuardGuestService]},
  {path:"guestAccount",component:GuestAccountComponent, canActivate:[RouteGuardUserService]},
  {path:"successfulPost",component:SuccessfulPostComponent,canActivate:[RouteGuardGuestService]},
  {path:"successfulContribution",component:SuccessfulContributionComponent,canActivate:[RouteGuardGuestService]},
  {path:"ratingChange",component:RatingChangeComponent,canActivate:[RouteGuardGuestService]},
  {path:"newsEdit",component:NewsEditComponent,canActivate:[RouteGuardGuestService]},
  {path:"**",component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
