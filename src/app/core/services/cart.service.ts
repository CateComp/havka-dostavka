import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalStorageService } from './local-storage.service';
import { Dish } from '../interfaces/dish';

export interface CartItem {
    product_id: string,
    product_name: string,
    product_img: string,
    product_price: number,
    product_quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userId: string;
  constructor(
      private _firebase: FirebaseService,
      private _afAuth: AngularFireAuth, 
      private _localStorage: LocalStorageService) { 
  }

  getCartItems(): CartItem[] {
    return this._localStorage.get('cartItems');
  }

  saveCartItems(items: CartItem[]) {
      this._localStorage.save('cartItems', items);
  }

  clearCart() {
    localStorage.removeItem('cartItems');
  }

  addCartItem(product: Dish) {
      let items = this._localStorage.get('cartItems');

      if (!items) {
          items = [];
      }

      let existingItem = items.find(i => i.product_id == product.id);

      if (existingItem) {
          existingItem.product_quantity += 1;
      } else {
        let cartItem = {
            product_id: product.id,
            product_name: product.name,
            product_img: product.img,
            product_price: product.price,
            product_quantity: 1
        };

        items.push(cartItem);
      }

      this._localStorage.save('cartItems', items);
  }

  completeOrder(items: CartItem[]): Promise<any> {
    let self = this;

    let promise = new Promise(function(resolve, reject) {
        self._afAuth.idToken.subscribe(userId => {
            let orderDetails = {
                user_id: userId,
                products: items.map((item) => {
                    return { product_id: item.product_id, quantity: item.product_quantity }
                })
            }

            self._firebase.addOrder(orderDetails)
            .then(function() {
              resolve();  
            });
        })
    });
    
    return promise;
  }
}
