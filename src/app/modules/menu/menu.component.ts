import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'app/core/services/firebase.service';
import { Subscription } from 'rxjs';
import { Dish } from 'app/core/interfaces/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menu: Dish[] = [];
  private subscription: Subscription;
  constructor(private firebaseServise: FirebaseService) { }

  ngOnInit(): void {
    this.subscription = this.firebaseServise.getItems()
    .subscribe((data: Dish[]) => this.menu = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
