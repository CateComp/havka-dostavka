import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseItem } from 'app/core/interfaces/firebase-item';
import { map } from 'rxjs/operators';

<<<<<<< HEAD
export interface Doc { name: string; }
=======
export interface Item {
  name?: string;
  price?: number;
  description?: string;
}
>>>>>>> develop

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
<<<<<<< HEAD
  itemsCollection: AngularFirestoreCollection<FirebaseItem>;

  private itemDoc: AngularFirestoreDocument<Doc>;
  doc: Observable<Doc>;
  
  items: Observable<FirebaseItem[]>;

  name:string;
=======
  itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<Item[]>;
  collName: string;
>>>>>>> develop
  constructor(private afs: AngularFirestore) { }
  getItems(collName:string) {
    this.itemsCollection = this.afs.collection<FirebaseItem>(collName);
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  getDoc(docName:string) {
    this.itemDoc = this.afs.doc<Doc>(docName);
    this.doc = this.itemDoc.valueChanges();
    return this.doc
  }

}
