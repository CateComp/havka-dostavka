import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';

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

  constructor(private _fbs: FirebaseService) { }

  addImage(event) {
    this.dish.img = event.target.files[0];
    console.log('dish', this.dish.img);
  }

  submitDish() {
    console.log('Dish to add', this.dish);
    this._fbs.uploadImage(this.dish);
    this._fbs.downloadImage(this.dish);
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
