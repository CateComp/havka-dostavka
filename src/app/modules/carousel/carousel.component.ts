import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselInfoService } from 'app/core/services/carousel-info.service';
import { Subscription } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';
import { News } from 'app/core/interfaces/news';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {
  public mostOrderedDish: any;
  public lastNews: any;
  private subscription: Subscription;
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/1100/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig, public carousel: CarouselInfoService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  public ngOnInit() {
    this.subscription = this.carousel.getMostOrderedDish()
      .subscribe((data: Dish[]) => {
        this.mostOrderedDish = data[0];
      });
    this.subscription = this.carousel.getLastNews()
      .subscribe((data: News[]) => {
        this.lastNews = data[0];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
