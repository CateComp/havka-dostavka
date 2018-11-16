import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { PROPERTIES } from 'app/core/app-config';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public registerForm: FormGroup;
  submitted = false;
  public image;
  public filterProp: filterProp[] = PROPERTIES;
  public dish: Dish = {
    name: '',
    type: '',
    todaymenu: false,
    price: '1',
    weight: '',
    img: '',
    info: ''
  };

  constructor(private _fbs: FirebaseService, private _formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      todaymenu: false,
      price: ['1', Validators.required],
      weight: ['', Validators.required],
      img: ['', Validators.required],
      info: ['', Validators.required]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  public addImage(event) {
    this.dish.img = event.target.files[0];
    console.log('dish', this.dish.img);
  }

  public submitDish() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    console.log('Dish to add', this.dish);
    this._fbs.uploadImage(this.dish);
    this._fbs.downloadImage(this.dish);
    this._fbs.addDish(this.dish);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
