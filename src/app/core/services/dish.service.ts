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
            .pipe(map(data => data.slice(0, 4)));
  }
}
