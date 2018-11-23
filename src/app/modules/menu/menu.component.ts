import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription, Observable } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';
import { DishService } from 'app/core/services/dish.service';
import { PROPERTIES } from 'app/core/app-config';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { CartService } from 'app/core/services/cart.service';
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

  public comle = [];
  public totalCompMount: number = 0;
  constructor(
    private firebaseService: FirebaseService,
    private _cartService: CartService,
    private _dishService: DishService) { }

  complexMenu(): void {
    this.isComplex = true;
    this.subscription = this._dishService.complexMenu()
     .subscribe((data: any) => {
        data.forEach(element => {
          return this.comle.push(element)
        });
        return this.complex = data[1]});
  }

  public addToShoppingCart(elem): void {
    let complexElement : Dish = {
      complex: '',
      half: false,
      name: '',
      type: '',
      todaymenu: false,
      price: 0,
      weight: 0,
      img: '',
      info: '',
      orders: 0,
      rating: 0
    };
    complexElement.price = elem.totalPrice.toFixed(2)*0.8;
    complexElement.complex = elem.menuName;
    complexElement.type = elem.menuName;
    complexElement.info = elem.menuName;
    complexElement.name = elem.menuName;
    complexElement.img = 'assets/pictures/JuO6AG9jVnqk0_sjZBfjr7Xl-AGnJimF-min.jpg';

    this._cartService.addCartItem(complexElement);
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

  public ngOnInit() {
    this.allDishes();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
