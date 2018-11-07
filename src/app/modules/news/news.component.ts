import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/core/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news = [];
  public currentUrl;
  public limitItems: number;

  constructor(private _newsService: NewsService, private _router: Router) {
    _router.events.subscribe((url: any) => this.currentUrl = url);
  }

  ngOnInit() {
    this._newsService.getNews()
      .subscribe(data => this.news = data);
  }

}
