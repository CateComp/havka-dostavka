import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private readonly DEFAULT_DISHES_COUNT = 3;

  constructor(private _firebase: FirebaseService) { }

  public getDishesSortedByRating(): Observable<Dish[]> {
   return this._firebase.getItems()
            .pipe(map(data => data.sort((a, b) => a.rating - b.rating)))
            .pipe(map(data => data.reverse()))
            .pipe(map(data => data.slice(0, this.DEFAULT_DISHES_COUNT)));
  }

  public todaysMenu(): Observable<Dish[]> {
   return this._firebase.getItems()
            .pipe(map((data: Dish[]) => data.filter((arr: Dish) => arr.todaymenu)));
  }

  public complexMenu() {
   return this._firebase.getItems()
            .pipe(map((data: Dish[]) => {
              let totalPrice1 = 0;
              let totalPrice2 = 0;
              let totalPrice3 = 0;
              const bussiness1 = data.filter((arr: Dish) => {
                if(arr.complex === 'bussiness1') {
                  totalPrice1 += arr.price;
                }
                return arr.complex === 'bussiness1';
              });
              const bussiness2 = data.filter((arr: Dish) => {
                if(arr.complex === 'bussiness2') {
                  totalPrice2 += arr.price;
                }
                return arr.complex === 'bussiness2'});
              const bussiness3 = data.filter((arr: Dish) => {
                if(arr.complex === 'bussiness3') {
                  totalPrice3 += arr.price;
                }
                return arr.complex === 'bussiness3'});
              return [
                { totalPrice: totalPrice1, menuName: 'Комплекс 1', bussiness: bussiness1},
                { totalPrice: totalPrice2, menuName: 'Комплекс 2', bussiness: bussiness2},
                { totalPrice: totalPrice3, menuName: 'Комплекс 3', bussiness: bussiness3} ];
            }));
  }
}
