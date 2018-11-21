import { Injectable } from '@angular/core';
import { AboutUs } from 'app/core/interfaces/about-us';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  
  constructor(private _firebase: FirebaseService) { }

  getArticles(): Observable<AboutUs[]> {
    return this._firebase.getAboutUs();
  }
}