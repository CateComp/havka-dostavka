import { Component, OnInit } from '@angular/core';
import { DishService } from 'app/core/services/dish.service';
import { Dish } from 'app/core/interfaces/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dishes: Dish[] = [];

  constructor(private _dishService: DishService) { }

  ngOnInit() {
    this._dishService.getDishesSortedByRating(this.dishes);
  }

}
