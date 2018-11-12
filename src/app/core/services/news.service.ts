import { Injectable } from '@angular/core';
import { News } from 'app/core/interfaces/news';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _firebase: FirebaseService) { }

  getCurrentNews(): Observable<News[]> {
    return this._firebase.getNews();
  }
}
