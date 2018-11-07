import { Component, OnInit, Input } from '@angular/core';
import { DishService } from 'app/core/services/dish.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dishes;
  isHovered;

  mouseHovering(i) {
    return this.dishes[i].isHovered = true;
  }

  mouseLeaving(i) {
    return this.dishes[i].isHovered = false;
  }

  constructor(private _dishesService: DishService) {}

  ngOnInit() {
    console.log(this.dishes)
  }

}
