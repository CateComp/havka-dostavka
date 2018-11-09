import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  name?: string;
  price?: number;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<Item[]>;
  collName: string;
  constructor(private afs: AngularFirestore) { }
  getItems(collName) {
    this.itemsCollection = this.afs.collection<Item>(collName);
    // this.itemsCollection.add(item);
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }
}
