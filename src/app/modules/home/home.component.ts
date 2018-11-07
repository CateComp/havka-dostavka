import { Component, OnInit } from '@angular/core';
import { DishService } from 'app/core/services/dish.service';
import { Subscription } from 'rxjs';
// import { HttpService } from 'app/core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dishes = [];
  private subscription: Subscription;

  constructor(private _dishService: DishService) {
    this.dishes = this._dishService.sortDishesByRating();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    console.log("home ", this._dishService.sortDishesByRating())
    this.subscription = this._dishService.getDishes();
  }

}
