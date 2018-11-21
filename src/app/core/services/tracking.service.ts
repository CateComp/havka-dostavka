import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private currentPoint: any[] = [];
  private index: number;
  private arr: any[];

  constructor() { }

  InitialCalculation() {
    // array from firebase 
    // arr
    this.index = 0;
    // setinterval(1000);
    this.currentPoint = this.arr[this.index];
    this.index++;
  }
  // than get currentPoint in component 
}
