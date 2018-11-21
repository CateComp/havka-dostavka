import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription } from 'rxjs';
import { AboutUs } from 'app/core/interfaces/about-us';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  public articles: AboutUs[] = [];
  private subscription: Subscription;
  constructor(private firebaseServise: FirebaseService) { }
   
  public ngOnInit() {
    this.subscription = this.firebaseServise.getAboutUs()
    .subscribe((data: AboutUs[]) => this.articles = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
