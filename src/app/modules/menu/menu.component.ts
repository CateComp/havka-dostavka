import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription, Observable } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';
import { DishService } from 'app/core/services/dish.service';
import { MenuPipe } from 'app/core/pipes/menu.pipe';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menu: Dish[] = [];
  public name: string = '';
  public complex: Dish[][] = [];
  private subscription: Subscription;
  public isComplex: boolean;
  public filterProp: string[] = [
    'desert',
    'soups',
    'hot meals',
    'drinks',
    'pizza'
  ];

  constructor(
    private firebaseServise: FirebaseService,
    private _dishService: DishService) { }

  complexMenu() {
    this.isComplex = true;
    this.subscription = this._dishService.complexMenu()
     .subscribe((data: Dish[][]) => this.complex = data);
  }

  todayMenu() {
    this.isComplex = false;
    this.subscription = this._dishService.todaysMenu()
     .subscribe((data: Dish[]) => this.menu = data);
  }

  allDishes(): void {
    this.isComplex = false;
    this.subscription = this.firebaseServise.getItems()
    .subscribe((data: Dish[]) => this.menu = data);
  }

  addType(val: string) {
    this.name += val;
  }

  ngOnInit(): void {
    this.allDishes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
