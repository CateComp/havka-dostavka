import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[];

  constructor() { 
    this.products = [
      {
        product_id: '1',
        product_name: 'З куркою та грибами',
        product_img: 'https://images.pizza33.ua/products_for_catalog/F87hxnCbFeBIeznrX4rJZtvODfoMLMuD.jpg',
        product_price: '65',
        product_quantity: 1
      },
      {
        product_id: '2',
        product_name: 'Вегетаріанська',
        product_img: 'https://donattelo.ru/image/cache/catalog/1%D0%BF%D0%B8%D1%86%D1%86%D0%B0/zesar-500x500.png',
        product_price: '73',
        product_quantity: 1
      },
      {
        product_id: '3',
        product_name: 'З перцем та сосискою',
        product_img: 'http://img.krzl.ru/a/cesar/files//import/pizza012.jpg',
        product_price: '80',
        product_quantity: 1
      }
    ];
  }

  ngOnInit() {
  }

  totalPriceOfProducts() {
    let totalPrice = 0;
    for(let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].product_price * this.products[i].product_quantity;
    }
    return totalPrice;
  }

  getProductSummary(price: number, quantity: number) {
    return price * quantity;
  }

  deleteProductFromCart(product) {
    for(let y = 0; y < this.products.length; y++) {
      if(this.products[y].product_id === product) {
        this.products.splice(y, 1);
      }
    }
  }

  addQuantity(product) {
    for(let z = 0; z < this.products.length; z++) {
      if(this.products[z].product_id === product) {
        this.products[z].product_quantity += 1;
      }
    }
  }

  deleteQuantity(product) {
    for(let j = 0; j < this.products.length; j++) {
      if(this.products[j].product_id === product) {
        if(this.products[j].product_quantity > 1) {
          this.products[j].product_quantity -= 1;
        }
      }
    }
  }

}
