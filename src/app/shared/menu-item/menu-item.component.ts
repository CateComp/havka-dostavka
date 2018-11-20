import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';
import { CartService } from 'app/core/services/cart.service';
import { FirebaseService } from 'app/core/services/firebase.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { PROPERTIES } from 'app/core/app-config';
import { AuthService } from 'app/core/services/auth.service';
// import { AdminPageComponent } from 'app/modules/admin-page/admin-page.component'

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
  public halfPortion: boolean = false;
  public halfPrice: number;
  public realPrice: number;
  public realName: string;
  public realId: string;
  public halfWeight: number;

  constructor(private _fbs: FirebaseService,
    private modalService: NgbModal,
    private _cartService: CartService,
    public activeModal: NgbActiveModal,
    public user: AuthService,
  ) {

    }

  public addToShoppingCart(): void {
    if(this.dish.price == this.halfPrice) {
      if(this.dish.id !== this.realId+'halfPortion'){
        this.dish.name +=' половинка';
        this.dish.id += 'halfPortion'
      }
    } else {
      this.dish.id = this.realId;
      this.dish.name = this.realName;
    }
    console.log(this.dish)

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
  }

  public addImage(event) {
    this.newImage = true;
    this.dish.img = event.target.files[0];
  }

  public close(content) {
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


public ngOnInit() {
  this.realName = this.dish.name;
  this.realId = this.dish.id;
  this.realPrice = this.dish.price;
  this.halfPrice = this.dish.price/2;
  this.halfWeight = this.dish.weight/2;
}


}
