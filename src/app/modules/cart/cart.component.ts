import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: CartItem[];

  constructor(private _cartService: CartService, private router: Router) { 
    this.products = _cartService.getCartItems() || [];
  }

  ngOnInit() {
  }

  totalPriceOfProducts() {
    let totalPrice = 0;
    for(let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].product_price * this.products[i].product_quantity;
    }
    return totalPrice;
  }

  getProductSummary(price: number, quantity: number) {
    return price * quantity;
  }

  deleteProductFromCart(product) {
    for(let y = 0; y < this.products.length; y++) {
      if(this.products[y].product_id === product) {
        this.products.splice(y, 1);
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  addQuantity(product) {
    for(let z = 0; z < this.products.length; z++) {
      if(this.products[z].product_id === product) {
        this.products[z].product_quantity += 1;
      }
    }
    this._cartService.saveCartItems(this.products);
  }

  deleteQuantity(product) {
    for(let j = 0; j < this.products.length; j++) {
      if(this.products[j].product_id === product) {
        if(this.products[j].product_quantity > 1) {
          this.products[j].product_quantity -= 1;
        }
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  completeOrder() {
    this._cartService.completeOrder(this.products)
    .then(function() {
      alert('Замовлення прийнято!');
    })
  }

  cancelOrder() {
    this._cartService.clearCart();
    this.router.navigate(['/menu']);
  }

}
