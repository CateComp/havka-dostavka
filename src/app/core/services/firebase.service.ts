import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dish } from '../interfaces/dish';
import { map } from 'rxjs/operators'


export interface Doc { name: string; }

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsCollection: AngularFirestoreCollection<Dish>;

  private itemDoc: AngularFirestoreDocument<Doc>;
  doc: any;
  
  items: Observable<Dish[]>;


  name:string;
  constructor(private afs: AngularFirestore) {  }
  getItems(collName:string):Observable<Dish[]> {
    this.itemsCollection = this.afs.collection<Dish>(collName);
    this.items = this.itemsCollection.valueChanges();
    return this.items
  }

  getDoc(docName:string) {
    this.itemDoc = this.afs.doc<Doc>(docName);
    this.doc = this.itemDoc.valueChanges();
    return this.doc
  }
  getDoc1():Observable<Dish[]> {
    this.itemsCollection = this.afs.collection<Dish>('salads');
      // .snapshotChanges() returns a DocumentChangeAction[], which contains
      // a lot of information about "what happened" with each change. If you want to
      // get the data and the id use the map operator.
      this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => {
          actions.map(a => {
            console.log('a', a)
            const data = a.payload.doc.data() as Dish;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
          return actions;
        }))
        return this.items;
  }
}