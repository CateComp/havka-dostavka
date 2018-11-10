import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private _http: HttpService) { }

  getDishes(arr) {
    this._http.getAllDishes()
            .subscribe(data => arr.push(...data));
  }

  getDishesSortedByRating(arr) {
    this._http.getAllDishes()
            .pipe(map(data => data.sort((a, b) => a.rating - b.rating)))
            .pipe(map(data => data.reverse()))
            .pipe(map(data => data.slice(0, 4)))
            .subscribe(data => arr.push(...data));
  }
}
