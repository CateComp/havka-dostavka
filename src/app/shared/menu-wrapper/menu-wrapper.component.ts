import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss']
})
export class MenuWrapperComponent implements OnInit {
  @Input() dishes;
  public homePageDishes;
  constructor() { }

  ngOnInit() {
    this.homePageDishes = this.dishes;
  }

}
