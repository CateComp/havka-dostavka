import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { Dish } from 'app/core/interfaces/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  public headers;
  public dishes;
  private error;

  constructor(private _http: HttpService) { }

  getAllDishes(arr = this.dishes) {
    this._http.getAllDishes()
      .subscribe(
        (data: Dish[]) =>
           arr = data,//success path
           error => this.error = error//errors path
        )
  }

  addDish(newDish, arr = this.dishes) {
    this._http.addDish(newDish)
      .subscribe(dish => arr.push(dish))
  };

  deleteDish(deleteDish, arr = this.dishes) {
    this._http.deleteDish(deleteDish.id).subscribe();
  }

  showConfigResponse() {
    this._http.getDishesFullInfo()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        // access the body directly, which is typed as `Config`.
        this.dishes = { ...resp.body };
      });
  }

  getDishesSortedByRating(arr) {
    this._http.getAllDishes()
            .pipe(map(data => data.sort((a, b) => a.rating - b.rating)))
            .pipe(map(data => data.reverse()))
            .pipe(map(data => data.slice(0, 4)))
            .subscribe(data => arr.push(...data));
  }
}
