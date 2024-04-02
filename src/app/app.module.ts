import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {AngularFireModule} from '@angular/fire/compat'
import { HttpClientModule } from  '@angular/common/http';
import {  provideFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyByD1jL30E122QMe15QsHU_8KHu8vfES1o",
  authDomain: "pc-geeks-8a830.firebaseapp.com",
  projectId: "pc-geeks-8a830",
  storageBucket: "pc-geeks-8a830.appspot.com",
  messagingSenderId: "738363655823",
  appId: "1:738363655823:web:d5eadb93decca2b6f312fa"
};
const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CoreModule,SharedModule,HttpClientModule,AngularFireModule,provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
