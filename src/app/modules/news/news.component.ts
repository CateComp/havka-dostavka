import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription } from 'rxjs';
import { News } from 'app/core/interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public currentNews: News[] = [];
  private subscription: Subscription;
  constructor(private firebaseServise: FirebaseService) { }

  ngOnInit(): void {
    this.subscription = this.firebaseServise.getNews()
    .subscribe((data: News[]) => this.currentNews = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
