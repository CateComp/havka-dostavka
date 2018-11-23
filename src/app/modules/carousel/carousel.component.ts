import { Component, OnInit } from '@angular/core';
import { CarouselInfoService } from 'app/core/services/carousel-info.service';
import { Subscription } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';
import { News } from 'app/core/interfaces/news';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements OnInit {
  public mostOrderedDish: any;
  public lastNews: any;
  public mostOrderedDessert: any;
  public mostOrderedPizza: any;
  private subscription: Subscription;

  constructor(public carousel: CarouselInfoService) {}

  public ngOnInit() {
    this.subscription = this.carousel.getMostOrderedSalad()
      .subscribe((data: Dish[]) => {
        this.mostOrderedDish = data[0];
      });
    this.subscription = this.carousel.getLastNews()
      .subscribe((data: News[]) => {
        this.lastNews = data[0];
      });
    this.subscription = this.carousel.getMostOrderedDessert()
      .subscribe((data: Dish[]) => {
        this.mostOrderedDessert = data[0];
      });
    this.subscription = this.carousel.getMostOrderedPizza()
      .subscribe((data: Dish[]) => {
        this.mostOrderedPizza = data[0];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
