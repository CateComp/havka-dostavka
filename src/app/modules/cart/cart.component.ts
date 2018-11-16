import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: CartItem[];

  constructor(private _cartService: CartService, private _router: Router, public user: AuthService) { 
    this.products = _cartService.getCartItems() || [];
  }

  ngOnInit() {
  }

  public totalPriceOfProducts(): number {
    let totalPrice = 0;
    for(let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].product_price * this.products[i].product_quantity;
    }
    return totalPrice;
  }

  public getProductSummary(price: number, quantity: number): number {
    return price * quantity;
  }

  public deleteProductFromCart(product): void {
    for(let y = 0; y < this.products.length; y++) {
      if(this.products[y].product_id === product) {
        this.products.splice(y, 1);
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  public addQuantity(product): void {
    for(let z = 0; z < this.products.length; z++) {
      if(this.products[z].product_id === product) {
        this.products[z].product_quantity += 1;
      }
    }
    this._cartService.saveCartItems(this.products);
  }

  public deleteQuantity(product): void {
    for(let j = 0; j < this.products.length; j++) {
      if(this.products[j].product_id === product) {
        if(this.products[j].product_quantity > 1) {
          this.products[j].product_quantity -= 1;
        }
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  public completeOrder(): void {
    this._cartService.completeOrder(this.products)
    .then(function() {
      alert('Замовлення прийнято!');
    })
  }

  public cancelOrder(): void {
    this._cartService.clearCart();
    this.products = [];
  }

  public changeRouteToMenu(): void {
    this._router.navigate(['/menu']);
  }

  public logInCart(): void {
    this._router.navigate(['/login']);
  }

}
