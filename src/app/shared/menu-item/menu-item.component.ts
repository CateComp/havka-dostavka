import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() image: string;
  @Input() hover: boolean;
  @Input() ingredients: string;
  @Input() price: number;
  @Input() name: string;


mouseHovering(i) {
 this.hover = true;
}

mouseLeaving(i) {
  this.hover = false;
}
  constructor() {}

  ngOnInit() {
  }

}
