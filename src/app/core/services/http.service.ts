import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../interfaces/dish';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _url = '/assets/mockinfo/mockdish.json';


  constructor(private _http: HttpClient) { }

  getAllDishes() : Observable<Dish[]> {
    return this._http.get<Dish[]>(this._url);
  }

}
