import { Component, OnInit, OnDestroy } from '@angular/core';
import { DishService } from 'app/core/services/dish.service';
import { Dish } from 'app/core/interfaces/dish';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public dishes: Dish[] = [];
  private subscription: Subscription;

  constructor(private _dishService: DishService) { }

  public ngOnInit() {
    this.subscription = this._dishService.getDishesSortedByRating()
    .subscribe((data: Dish[]) => this.dishes = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
