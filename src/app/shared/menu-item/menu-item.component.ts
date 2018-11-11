import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dish: DishHome;

mouseHovering() {
 this.dish.isHovered = true;
}

mouseLeaving() {
  this.dish.isHovered = false;
}
  constructor() {}

  ngOnInit() {
  }

}
