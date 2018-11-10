import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'app/core/services/about-us.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private articles: any[] = [];
  private currentUrl: string;

  constructor(private _aboutUsService: AboutUsService, private _router: Router) {
    _router.events.subscribe((url: any) => this.currentUrl = url);
  }
  
  ngOnInit() {
    this._aboutUsService.getArticle()
      .subscribe(data => this.articles = data);
  }

}
