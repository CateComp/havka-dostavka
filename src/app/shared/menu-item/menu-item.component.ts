import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';
import { CartService } from 'app/core/services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dish: DishHome;

  constructor(private _cartService: CartService) {}

  public addToShoppingCart(): void {
    this._cartService.addCartItem(this.dish);
  }

  mouseHovering() {
   this.dish.isHovered = true;
  }

  mouseLeaving() {
    this.dish.isHovered = false;
  }

  ngOnInit() {
  }

}
