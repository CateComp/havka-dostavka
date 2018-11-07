import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any;
  constructor(private firebaseServise: FirebaseService) { }

  ngOnInit() {
    this.firebaseServise.getItems('menu').subscribe(items => {
      this.menu = items;
    })
  }
}
