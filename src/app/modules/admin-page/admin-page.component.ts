import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public dish: Dish = {
    name: 'custom',
    type: 'custom',
    todaymenu: false,
    price: 100,
    weight: 'custom',
    img: 'custom',
    info: 'custom'
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

  addDish(dish: Dish) {
    this._fbs.addDish(dish);
  }

  submitDish() {

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
