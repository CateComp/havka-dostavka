import { Component, OnInit, Input } from '@angular/core';
import { DishServiceService } from 'app/core/services/dish-service.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() elementLimit;
  @Input() dishes;
  // public dishes = [];
  public currentUrl;
  public limitItems: number;
  public sortedArray;

  constructor(private _dishesService: DishServiceService) {
    console.log(this.dishes);
    console.log(this.sortedArray);
  }

  ngOnInit() {
    this.limitItems = this.elementLimit;
    // this._dishesService.getDishes()
    //   .subscribe(data => this.dishes.push(data));
  }

}
