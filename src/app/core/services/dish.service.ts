import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private _firebase: FirebaseService) { }

  getDishesSortedByRating(): Observable<Dish[]> {
   return this._firebase.getItems()
            .pipe(map(data => data.sort((a, b) => a.rating - b.rating)))
            .pipe(map(data => data.reverse()))
            .pipe(map(data => data.slice(0, 3)));
  }

  todaysMenu(): Observable<Dish[]> {
   return this._firebase.getItems()
            .pipe(map((data: Dish[]) => data.filter((arr: Dish) => arr.todaymenu)));
  }

  complexMenu() {
   return this._firebase.getItems()
            .pipe(map((data: Dish[]) => {
              const bussiness1 = data.filter((arr: Dish) => arr.complex === 'bussiness1');
              const bussiness2 = data.filter((arr: Dish) => arr.complex === 'bussiness2');
              const bussiness3 = data.filter((arr: Dish) => arr.complex === 'bussiness3');
              console.log([ bussiness1, bussiness2, bussiness3 ]);
              return [ bussiness1, bussiness2, bussiness3 ];
            }));
  }
}