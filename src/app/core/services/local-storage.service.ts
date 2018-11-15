import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  save(key: string, data: any) {
   let serialized = JSON.stringify(data);

   window.localStorage.setItem(key, serialized);
  }

  get(key: string): any {
      let json = window.localStorage.getItem(key);

      return JSON.parse(json);
  }
}
