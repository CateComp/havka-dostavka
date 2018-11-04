import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss']
})
export class MenuWrapperComponent implements OnInit {
  @Input() elementLimit;
  @Input() dishes;
  public homePageLimit;
  public homePageDishes;
  constructor() { }

  ngOnInit() {
    this.homePageLimit = this.elementLimit;
    this.homePageDishes = this.dishes;
    console.log(this.homePageDishes, 'I get from /home');
  }

}
