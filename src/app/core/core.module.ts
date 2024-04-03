import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '../shared/shared.module';
import { GitRedirectorComponent } from '../shared/git-redirector/git-redirector.component';
import { MiniModuleModule } from '../mini/mini-module.module';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    DiscussionsComponent,
    NewsComponent,
    
  ],
  imports: [
    CommonModule,RouterLink,SharedModule,MiniModuleModule
  ],
  exports:[NavbarComponent,FooterComponent,HomeComponent]
})
export class CoreModule { }
