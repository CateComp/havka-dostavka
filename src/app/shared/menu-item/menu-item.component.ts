import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';
import { CartService } from 'app/core/services/cart.service';
import { FirebaseService } from 'app/core/services/firebase.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { PROPERTIES } from 'app/core/app-config';
import { AuthService } from 'app/core/services/auth.service'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [ NgbModal, NgbActiveModal]
})
export class MenuItemComponent implements OnInit {
  @Input() dish: DishHome;
  public filterProp: filterProp[] = PROPERTIES;
  private newImage: boolean;

  
  constructor(private _fbs: FirebaseService,
    private modalService: NgbModal,
    private _cartService: CartService,
    public activeModal: NgbActiveModal,
    public user: AuthService,
  ) {  }
  
  public addToShoppingCart(): void {
    this._cartService.addCartItem(this.dish);
  }

  public onMouseHover() {
    this.dish.isHovered = true;
  }

  public onMouseLeave() {
    this.dish.isHovered = false;
  }

  public open(content) {
    this.modalService.open(content);
    this.submitValidation();
    console.log('This is ', this);
  }

  public addImage(event) {
    this.newImage = true;
    this.dish.img = event.target.files[0];
    console.log('dish', this.dish.img);
  }

  public close(content) {
    console.log('this', this);
    this.activeModal.close(content);
  }

  public deleteDish(): void {
    this._fbs.deleteDish(this.dish);
  }

  public saveEditDish() {
    console.log('Edited', this.dish);
    if (this.newImage) {
      this._fbs.uploadImage(this.dish);
      this._fbs.downloadImage(this.dish);
    }
    this._fbs.editDish(this.dish);
  }

  private submitValidation() {
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

public ngOnInit() {
}


}
