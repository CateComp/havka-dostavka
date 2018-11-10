import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutUs } from '../interfaces/about-us';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private _url: string = "assets/mockinfo/mock-about-us.json"
  
  constructor(private http: HttpClient) { }

  getArticle():Observable<AboutUs[]> {
    return this.http.get<AboutUs[]>(this._url);
  }
}
