import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu: any;
  constructor(private firebaseServise: FirebaseService) { }

  ngOnInit() {
    this.firebaseServise.getItems('salads').subscribe(items => {
      this.menu = items;
    })
  }
}