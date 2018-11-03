import { Component, OnInit } from '@angular/core';
import { DishServiceService } from 'app/core/services/dish-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  public dishes = [];
  public currentUrl;
  public limitItems: number;

  constructor(private _dishesService: DishServiceService, private _router: Router) {
    _router.events.subscribe((url: any) => this.currentUrl = url)
  }

  setLimit(url) {
    url = "/home" ? this.limitItems = 4 : this.limitItems = this.dishes.length;
  }

  ngOnInit() {
    this.setLimit(this.currentUrl);
    this._dishesService.getDishes()
      .subscribe(data => this.dishes = data);
  }

}
