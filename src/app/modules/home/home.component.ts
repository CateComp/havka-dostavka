import { Component, OnInit } from '@angular/core';
import { DishServiceService } from 'app/core/services/dish-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dishes = [];
  constructor(private _dishService: DishServiceService) {
  }

  ngOnInit() {
    this._dishService.getDishes()
      .subscribe(data => {
        this._dishService.sortByRating(data).forEach((element, index) => {
          return index < 4 ? this.dishes.push(element) : false;
        });
      });
  }

}
