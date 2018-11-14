import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'app/core/interfaces/dish';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss']
})
export class MenuWrapperComponent implements OnInit {
  @Input() dishes: Dish[];
  @Input() type: string;

  constructor() {}

  ngOnInit() {
  }

}
