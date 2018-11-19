import { Component, OnInit } from '@angular/core';
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
  public addDishForm: FormGroup;
  public defaultImage: string = 'assets/pictures/placeholder.jpg';

  public filterProp: filterProp[] = PROPERTIES;
  public dish: Dish = {
    complex: '',
    name: '',
    type: '',
    todaymenu: false,
    price: 0,
    weight: '',
    img: '',
    info: ''
  };

  constructor(private _fbs: FirebaseService, private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.addDishForm = new FormGroup({
      complex: new FormControl(''),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      todaymenu: new FormControl (false),
      price:  new FormControl(0, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]{0,3}((.)[0-9]{0,2})$')
      ])),
      weight:  new FormControl('', Validators.required),
      img:  new FormControl('', Validators.required),
      info:  new FormControl('', Validators.required)
      });
  }

  public onSubmit(): void {
    console.log(this.addDishForm);
    // stop here if form is invalid
    if (this.addDishForm.invalid) {
      return;
    }
    console.log(this.addDishForm);
    this.submitDish();
  }

  public addImage(event): void {
    this.dish.img = event.target.files[0];
    this._fbs.uploadImage(this.dish);
    setTimeout(() => this._fbs.downloadImage(this.dish), 1000);
  }

  public enableImage(): void {
    if(this.dish.name !== '') {
      this.addDishForm.controls.img.enable();
    } else {
      this.addDishForm.controls.img.disable();
    }
  }

  private submitDish(): void {
    console.log('Dish to add', this.dish);
    this._fbs.addDish(this.dish);
  }

}
