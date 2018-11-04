import { Component, OnInit } from '@angular/core';
import { DishServiceService } from 'app/core/services/dish-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public elementLimit = 4;
  public dishes = [];
  public openned;
  constructor(private _dishService: DishServiceService) {
  console.log(this.dishes);
  console.log(this.openned = this.dishes.slice(0, 3));
  }

  ngOnInit() {
    this._dishService.getDishes()
      .subscribe(data => this.dishes.push(data));
  }

}
