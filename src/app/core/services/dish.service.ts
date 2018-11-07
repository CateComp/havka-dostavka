import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Dish } from '../interfaces/dish';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  public dishes = [];

  constructor(private _http: HttpService) {
  }

  getDishes() {
    return this._http.getAllDishes()
            .subscribe(data => {
              data.forEach((element, index) => {
              return index < 4 ? this.dishes.push(element) : false;
            })
          })
  }

  sortDishesByRating() {
    const sortedArr = this.dishes.slice(0);

    sortedArr.sort((a, b) => a.rating - b.rating);

    return sortedArr.reverse();
  }
}