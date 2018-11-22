import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { TrackingComponent } from 'app/modules/tracking/tracking.component';
import { LocalStorageService } from 'app/core/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [ TrackingComponent ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: CartItem[];
  public phone: string = '';
  public address: string = '';
  public nrSelect: string;

  constructor(
    private _cartService: CartService,
    private _router: Router,
    public user: AuthService,
    public trackingComponent: TrackingComponent,
    public ls: LocalStorageService,
    ) {
    this.products = _cartService.getCartItems() || [];
  }

  public ngOnInit() {
    this.products = this._cartService.getCartItems() || [];
  }

  public totalPriceOfProducts(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].productPrice * this.products[i].productQuantity;
    }
    return totalPrice;
  }

  public getProductSummary(price: number, quantity: number): number {
    return price * quantity;
  }

  public deleteProductFromCart(product): void {
    for (let y = 0; y < this.products.length; y++) {
      if (this.products[y].productId === product) {
        this.products.splice(y, 1);
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  public addQuantity(product): void {
    for (let z = 0; z < this.products.length; z++) {
      if (this.products[z].productId === product) {
        this.products[z].productQuantity += 1;
      }
    }
    this._cartService.saveCartItems(this.products);
  }

  public deleteQuantity(product): void {
    for (let j = 0; j < this.products.length; j++) {
      if (this.products[j].productId === product) {
        if (this.products[j].productQuantity > 1) {
          this.products[j].productQuantity -= 1;
        }
      }
    }

    this._cartService.saveCartItems(this.products);
  }

  public completeOrder(): void {
    this._cartService.completeOrder(this.products, this.address, this.phone)
    .then(function() {
      alert('Замовлення прийнято!');
    });
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

  public isAddressValid(): boolean {
    return this.address && this.address.length > 0;
  }

  public isPhoneValid(): boolean {
    return this.phone && this.phone.length > 0;
  }

  public startTracking() {
    this.ls.save('way', this.nrSelect);
    this.trackingComponent.startWay(this.nrSelect);
  }
}
