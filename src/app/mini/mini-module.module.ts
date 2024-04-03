import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionNotLoggedInComponent } from './discussionNotLoggedIn/discussionNotLoggedIn.component';
import { DiscussionSubmitComponent } from './discussionSubmit/discussionSubmit.component';
import { DiscussionLogsComponent } from './discussionLogs/discussionLogs.component';
import { AllNewsComponent } from './allNews/allNews.component';
import { MyNewsComponent } from './myNews/myNews.component';
import { PostNewsComponent } from './postNews/postNews.component';
import { MyAccountDisscussionComponent } from './myAccountDisscussion/myAccountDisscussion.component';
import { MyAccountNewsComponent } from './myAccountNews/myAccountNews.component';
import { MyAccountRatingComponent } from './myAccountRating/myAccountRating.component';



@NgModule({
  declarations: [MyAccountRatingComponent,MyAccountNewsComponent,MyAccountDisscussionComponent,DiscussionNotLoggedInComponent,DiscussionSubmitComponent,DiscussionLogsComponent,AllNewsComponent,MyNewsComponent,PostNewsComponent],
  imports: [
    CommonModule
  ],
  exports:[DiscussionNotLoggedInComponent,MyAccountRatingComponent,MyAccountNewsComponent,MyAccountDisscussionComponent,DiscussionSubmitComponent,DiscussionLogsComponent,AllNewsComponent,MyNewsComponent,PostNewsComponent]
})
export class MiniModuleModule { }
