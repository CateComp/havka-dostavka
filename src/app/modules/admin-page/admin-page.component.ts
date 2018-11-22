import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { PROPERTIES } from 'app/core/app-config';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  @Input() dishExisted: Dish;

  public addDishForm: FormGroup;
  public defaultImage = 'assets/pictures/placeholder.jpg';

  public filterProp: filterProp[] = PROPERTIES;
  public dish: Dish = {
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
  constructor(private _fbs: FirebaseService, private _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    if (this.dishExisted) {
      this.dishExisted.half = Boolean(this.dishExisted.half);
    }

    this.dish = this.dishExisted || this.dish;
    console.log(this.dish)
    this.addDishForm = new FormGroup({
      complex: new FormControl(this.dish.complex),
      half: new FormControl (this.dish.half),
      name: new FormControl(this.dish.name, Validators.required),
      type: new FormControl(this.dish.type, Validators.required),
      todaymenu: new FormControl (this.dish.todaymenu),
      price:  new FormControl(this.dish.price, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]{0,3}((.)[0-9]{0,2})$')
      ])),
      weight:  new FormControl(this.dish.weight, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]{0,5}')
      ])),
      // img:  new FormControl(this.dish.img),
      info:  new FormControl(this.dish.info, Validators.required)
      });
  }

  public onSubmit(): void {
    if (this.addDishForm.invalid) {
      return;
    }
    this.submitDish();
  }

  public addImage(event): void {
    // this.dish.img = event.target.files[0];
    const image = event.target.files[0];
    this._fbs.uploadImage(this.dish, image).then( data => {
      console.log('data', data)
      return this._fbs.downloadImage(this.dish)})
    // setTimeout(, 1000);
  }

  // public enableImage(): void {
  //   if (this.dish.name !== '') {
  //     this.addDishForm.controls.img.enable();
  //   } else {
  //     this.addDishForm.controls.img.disable();
  //   }
  // }

  private submitDish(): void {
    console.log('Dish to process', this.dish);
    if (this.dish.id !== undefined) {
      this._fbs.editDish(this.dish);
    } else {
      this.dish.id = this.dish.name + '' + Math.floor(Math.random() * Math.floor(1000));
      this._fbs.addDish(this.dish);
    }
  }

}
