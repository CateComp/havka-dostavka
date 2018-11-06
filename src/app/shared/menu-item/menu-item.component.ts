import { Component, OnInit, Input } from '@angular/core';
import { DishServiceService } from 'app/core/services/dish-service.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dishes;

  constructor(private _dishesService: DishServiceService) {}

  ngOnInit() {
  }

}
