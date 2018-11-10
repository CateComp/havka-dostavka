import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseItem } from 'app/core/interfaces/firebase-item';
import { map } from 'rxjs/operators';

export interface Doc { name: string; }

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsCollection: AngularFirestoreCollection<FirebaseItem>;

  private itemDoc: AngularFirestoreDocument<Doc>;
  doc: Observable<Doc>;
  
  items: Observable<FirebaseItem[]>;

  name:string;
  constructor(private afs: AngularFirestore) { }
  getItems(collName:string) {
    this.itemsCollection = this.afs.collection<FirebaseItem>(collName);
    this.items = this.itemsCollection.valueChanges();
    return this.items
  }

  getDoc(docName:string) {
    this.itemDoc = this.afs.doc<Doc>(docName);
    this.doc = this.itemDoc.valueChanges();
    return this.doc
  }

}
