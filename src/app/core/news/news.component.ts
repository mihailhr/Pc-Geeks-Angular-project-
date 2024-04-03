import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateNewsService } from 'src/app/services/updateNews.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GetNewsInterface } from 'src/app/interfaces/getNewsInterface';
import { GetExistingNewsInterface } from 'src/app/interfaces/GetExistingNewsInterface';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor(public userInfo:UserInfoService){}

}
