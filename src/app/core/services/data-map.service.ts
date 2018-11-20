import { Injectable } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { MapCoords } from 'app/core/interfaces/map-coords';
import { FirebaseService } from 'app/core/services/firebase.service';
import { interval, timer, Observable } from 'rxjs';
import { zip, switchMap, map, startWith, scan } from 'rxjs/operators';
// import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Injectable({
  providedIn: 'root'
})
export class DataMapService {

  constructor(
    private ls: LocalStorageService,
    private fb: FirebaseService
  ) {}
  public getCurrentPoint(timeInterval: number, coordsUrl) {
    const currentIndex = this.ls.get('currentIndex') || 0;
    return Observable.create((observer) => {
      this.fb.getCoordsFromFirebase(coordsUrl)
        .subscribe((data) => {
          let index = currentIndex;
          console.log(index)
          const elementsCount = data.length;
          console.log(data)

          setInterval(() => {
            if (index < elementsCount) {
              observer.next(data[index]);
              index++;
              this.ls.save('currentIndex', index)
            } else {
              observer.complete();
            }
          }, 1000)
        })
    })
  }
  public getPoints(coordsUrl){
    return this.fb.getCoordsFromFirebase(coordsUrl)
  }
}