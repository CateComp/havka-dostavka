import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription, Observable } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';
import { DishService } from 'app/core/services/dish.service';
import { PROPERTIES } from 'app/core/app-config';
import { filterProp } from 'app/core/interfaces/fiter-properties';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menu: Dish[] = [];
  public name: string = '';
  public isChecked: boolean = false;
  public complex: Dish[][] = [];
  private subscription: Subscription;
  public isComplex: boolean;
  public filterProp: filterProp[] =  PROPERTIES;

  constructor(
    private firebaseService: FirebaseService,
    private _dishService: DishService) { }

  complexMenu(): void {
    this.isComplex = true;
    this.subscription = this._dishService.complexMenu()
     .subscribe((data: Dish[][]) => this.complex = data);
  }

  todayMenu(): void {
    this.isComplex = false;
    this.subscription = this._dishService.todaysMenu()
     .subscribe((data: Dish[]) => this.menu = data);
  }

  allDishes(): void {
    this.isComplex = false;
    this.subscription = this.firebaseService.getItems()
    .subscribe((data: Dish[]) => this.menu = data);
  }

  addType(event): void {
    let _changedArr: string[] = this.name.split(' ');
    if (!event.isChecked) {
      let index: number = _changedArr.indexOf(event.name);
      _changedArr.splice(index, 1);
      this.name = _changedArr.join();
    } else {
      this.name += event.name + ' ';
    };
  }

  ngOnInit(): void {
    this.allDishes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
