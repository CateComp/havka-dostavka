import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News } from '../interfaces/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url: string = "assets/mockinfo/mocknews.json"
  
  constructor(private http: HttpClient) { }

  getNews():Observable<News[]> {
    return this.http.get<News[]>(this._url);
  }
}
