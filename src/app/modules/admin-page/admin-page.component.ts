import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public image;
  public dish: Dish = {
    name: '',
    type: '',
    todaymenu: false,
    price: 0,
    weight: '',
    img: '',
    info: ''
  };

  public filterProp = [
    {name: 'dessert',
    isChecked: false},
    {name: 'first',
    isChecked: false},
    {name: 'second',
    isChecked: false},
    {name: 'salads',
    isChecked: false},
    {name: 'drink',
    isChecked: false},
    {name: 'pizza',
    isChecked: false}
  ];

  constructor(private _fbs: FirebaseService, private _http: HttpClient) { }

  addDish(dish: Dish) {
    this._fbs.addDish(dish);
  }
  addImage(event) {
    this.dish.img = event.target.files[0];
    console.log("dish", this.dish.img)
  }

  submitDish() {
    console.log(this.dish);
    // this._fbs.addDish(this.dish);
  }
  onUpload() {
    console.log('Upload', this.dish.img)
    let database = firebase.database()
    let storage = firebase.storage();
    let randId = Math.random();
    let buildenavn = storage.ref("images-mocks/" + randId);
    buildenavn.put(this.dish.img);

    this.dish.img = "https://firebasestorage.googleapis.com/v0/b/havka-2726f.appspot.com/o/images-mocks%2F" + randId + "?alt=media";
    console.log(this.dish.img)
    this._fbs.addDish(this.dish);
  }

  submitValidation() {
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
  }

  ngOnInit() {
    this.submitValidation();
  }

}
