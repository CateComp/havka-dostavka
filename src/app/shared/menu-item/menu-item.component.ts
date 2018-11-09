import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dishes;
  public isHovered: boolean;

  mouseHovering(i) {
    return this.dishes[i].isHovered = true;
  }

  mouseLeaving(i) {
    return this.dishes[i].isHovered = false;
  }

  constructor() {}

  ngOnInit() {
  }

}
