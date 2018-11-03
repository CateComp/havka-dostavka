import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../interfaces/dish';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  public currentUrl;
  private _url: string = "/assets/mockinfo/mockdish.json";

  constructor(private http: HttpClient) { }

  getDishes():Observable<Dish[]> {
    return this.http.get<Dish[]>(this._url);
  }
}