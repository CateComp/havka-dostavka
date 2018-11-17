import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalStorageService } from './local-storage.service';
import { Dish } from 'app/core/interfaces/dish';

export interface CartItem {
    productId: string;
    productName: string;
    productImg: string;
    productPrice: number;
    productQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
      private _firebase: FirebaseService,
      private _afAuth: AngularFireAuth, 
      private _localStorage: LocalStorageService) { 
  }

  public getCartItems(): CartItem[] {
      return this._localStorage.get('cartItems');
  }

  public saveCartItems(items: CartItem[]): void {
      this._localStorage.save('cartItems', items);
  }

  public clearCart(): void {
    localStorage.removeItem('cartItems');
  }

  public addCartItem(product: Dish): void {
      let items = this._localStorage.get('cartItems') || [];

      let existingItem = items.find(i => i.productId === product.id);

      if (existingItem) {
          existingItem.productQuantity += 1;
      } else {
        let cartItem = {
            productId: product.id,
            productName: product.name,
            productImg: product.img,
            productPrice: product.price,
            productQuantity: 1
        };

        items.push(cartItem);
      }

      this._localStorage.save('cartItems', items);
  }

  public completeOrder(items: CartItem[]): Promise<any> {
    let promise = new Promise((resolve, reject) => {
        this._afAuth.idToken.subscribe(userId => {
            const products = items.map((item) => { return { productId: item.productId, quantity: item.productQuantity } });
            const orderDetails = { userId: userId, products }

            this._firebase.addOrder(orderDetails)
            .then(function() {
              resolve();  
            });
        })
    });
    
    return promise;
  }
}
