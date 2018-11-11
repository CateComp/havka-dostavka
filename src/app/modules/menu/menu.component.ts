import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = [];
  constructor(private firebaseServise: FirebaseService) { }

  ngOnInit() {
    this.firebaseServise.getItems()
    .subscribe(data => this.menu.push(...data));
  }

}
