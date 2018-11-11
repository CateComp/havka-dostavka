import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'app/core/interfaces/news';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url = 'assets/mockinfo/mocknews.json';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this._url);
  }
}
