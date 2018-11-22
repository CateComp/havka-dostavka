import { Injectable } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { News } from 'app/core/interfaces/news';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarouselInfoService {

  constructor(private fb: FirebaseService) { }

  getMostOrderedSalad(): Observable<Dish[]> {
    return this.fb.getItems()
             .pipe(map(data => data.filter(a => a.type === 'salads')))
             .pipe(map(data => data.sort((a, b) => a.orders - b.orders)))
             .pipe(map(data => data.reverse()))
             .pipe(map(data => data.slice(0, 1)));
  }

  getLastNews(): Observable<News[]> {
    return this.fb.getNews()
             .pipe(map(data => data.sort((a, b) => a.id - b.id)))
             .pipe(map(data => data.reverse()))
             .pipe(map(data => data.slice(0, 1)));
  }

  getMostOrderedDessert(): Observable<Dish[]> {
    return this.fb.getItems()
             .pipe(map(data => data.filter(a => a.type === 'dessert')))
             .pipe(map(data => data.sort((a, b) => a.orders - b.orders)))
             .pipe(map(data => data.reverse()))
             .pipe(map(data => data.slice(0, 1)));
  }

  getMostOrderedPizza(): Observable<Dish[]> {
    return this.fb.getItems()
             .pipe(map(data => data.filter(a => a.type === 'pizza')))
             .pipe(map(data => data.sort((a, b) => a.orders - b.orders)))
             .pipe(map(data => data.reverse()))
             .pipe(map(data => data.slice(0, 1)));
  }
}
