import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitRedirectorComponent } from './git-redirector/git-redirector.component';



import { Router } from '@angular/router';
import { SignOutComponent } from './buttons/sign-out/sign-out.component';
import { SignInComponent } from './buttons/sign-in/sign-in.component';
import { RegisterComponent } from './buttons/register/register.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { WelcomeUserComponent } from './buttons/welcomeUser/welcomeUser.component';
import { MyAccountComponent } from './pages/myAccount/myAccount.component';
import { Firestore } from '@angular/fire/firestore';
import { DeleteAccountComponent } from './buttons/deleteAccount/deleteAccount.component';
import { GuestAccountComponent } from './pages/guestAccount/guestAccount.component';
import { SuccessfulPostComponent } from './pages/successfulPost/successfulPost.component';
import { SuccessfulContributionComponent } from './pages/successfulContribution/successfulContribution.component';
import { RatingChangeComponent } from './pages/ratingChange/ratingChange.component';
import { NewsEditComponent } from './pages/newsEdit/newsEdit.component';
import { EmailTransformPipePipe } from '../pipes/emailTransformPipe.pipe';
import { MiniModuleModule } from '../mini/mini-module.module';





@NgModule({
  declarations: [
    GitRedirectorComponent,
    SignOutComponent,
    SignInComponent,
    RegisterComponent,
    WelcomeUserComponent,
    MyAccountComponent,
    DeleteAccountComponent,
    GuestAccountComponent,
    SuccessfulPostComponent,
    SuccessfulContributionComponent,
    RatingChangeComponent,
    NewsEditComponent,EmailTransformPipePipe
 
    
    
    
  ],
  imports: [
    CommonModule,FormsModule,MiniModuleModule
  ],
  exports:[GitRedirectorComponent,SignOutComponent,SignInComponent,RegisterComponent,WelcomeUserComponent,MyAccountComponent,DeleteAccountComponent,GuestAccountComponent,SuccessfulPostComponent,SuccessfulContributionComponent,RatingChangeComponent,NewsEditComponent],
  bootstrap:[AppComponent]
})
export class SharedModule { 
  
}
