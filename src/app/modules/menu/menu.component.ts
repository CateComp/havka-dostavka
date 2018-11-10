import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Dish } from 'app/core/interfaces/dish';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = [];
  public docs = [];
  constructor(private firebaseServise: FirebaseService) {
    console.log('this.docs', this.docs)
  }

  ngOnInit() {
    this.firebaseServise.getItems('salads')
    .subscribe(items => this.menu.push(...items))
    this.firebaseServise.getItems('hot meals').subscribe(items => this.menu.push(...items))
    this.firebaseServise.getItems('soups').subscribe(items => this.menu.push(...items))
    this.firebaseServise.getItems('pizza').subscribe(items => this.menu.push(...items))
    this.firebaseServise.getItems('salads').subscribe(items => this.menu.push(...items))
    this.firebaseServise.getItems('salads').subscribe(items => this.menu.push(...items))
    console.log(this.firebaseServise.getDoc1().subscribe(items => this.docs.push(...items)));
  }
}