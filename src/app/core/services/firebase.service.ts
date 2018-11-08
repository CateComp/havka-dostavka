import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseItem } from 'app/core/interfaces/firebase-item'



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsCollection: AngularFirestoreCollection<FirebaseItem>;
  
  items: Observable<FirebaseItem[]>;
  collName:string;
  name:string;
  constructor(private afs: AngularFirestore) { }
  getItems(collName) {
    this.itemsCollection = this.afs.collection<FirebaseItem>(collName);
    this.items = this.itemsCollection.valueChanges();
    return this.items
  }
  addItem(name) {
    this.itemsCollection.add(name)
  }
}
