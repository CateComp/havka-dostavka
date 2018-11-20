import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Dish } from 'app/core/interfaces/dish';
import { AboutUs } from 'app/core/interfaces/about-us';
import { MapCoords } from 'app/core/interfaces/map-coords';
import { News } from 'app/core/interfaces/news';
import { map } from 'rxjs/operators';
<<<<<<< HEAD
=======
import { of as observableOf, from } from 'rxjs'

import { OrderDetails } from 'app/core/interfaces/order-details';
>>>>>>> d411eb0... added tracking
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  public getItems(): Observable<Dish[]> {
    console.log('sending the request...');
    return this.afs.collection<Dish>('menu')
      .snapshotChanges()
      .pipe(
        map(data => {
          console.log('compiling data...');
          return data.map(e => {
            const id = e.payload.doc.id;
            const dataObj = e.payload.doc.data() as Dish;
            return { id, ...dataObj };
          });
        })
      );
  }

  public downloadImage(dish: Dish): void {
    console.log('Download image from storage...', dish.img);
    dish.img = `https://firebasestorage.googleapis.com/v0/b/havka-2726f.appspot.com/o/images-mocks%2F${dish.name}?alt=media`;
  }

  public uploadImage(dish: Dish): void {
    console.log('Upload image to storage...');
    const database = firebase.database();
    const storage = firebase.storage();
    const buildenavn = storage.ref('images-mocks/' + dish.name);
    buildenavn.put(dish.img);
  }

  public addDish(dish: Dish): void {
    console.log('Adding the dishes...');

    this.afs.collection<Dish>('menu')
      .add(dish)
      .then((docRef) => console.log('Dish added with id: ', docRef.id))
      .catch(error => console.log('Error adding the dish: ', error));
  }

  public deleteDish(dish: Dish): void {
    console.log('Deleting...');

    this.afs.collection<Dish>('menu')
      .doc(dish.id)
      .delete()
      .then(_ => console.log('Document succesfully deleted!'))
      .catch(err => console.log('Error removing the document: ', err));
  }

  public editDish(dish: Dish): void {
    console.log('Dish editing...');

    this.afs.collection<Dish>('menu')
      .doc(dish.id)
      .update(dish)
      .then(_ => console.log('Dish successfuly updated...'))
      .catch(err => console.log('Error editing the dish: ', err));
  }

  public getAboutUs(): Observable<AboutUs[]> {
    return this.afs.collection<AboutUs>('about-us')
      .snapshotChanges()
      .pipe(
        map(data => {
          return data.map(e => {
            const id = e.payload.doc.id;
            const dataObj = e.payload.doc.data() as AboutUs;
            return { id, ...dataObj };
          });
        })
      );
  }

  public getNews(): Observable<News[]> {
    return this.afs.collection<News>('news')
      .snapshotChanges()
      .pipe(
        map(data => {
          return data.map(e => {
            const id = e.payload.doc.id;
            const dataObj = e.payload.doc.data() as News;
            return { id, ...dataObj };
          });
        })
      );
  }
<<<<<<< HEAD
=======

  addOrder(orderDetails: OrderDetails): Promise<firebase.firestore.DocumentReference> {
    return this.afs.collection<OrderDetails>('orders').add(orderDetails);
  }
  getCoordsFromFirebase(coordsUrl): Observable<MapCoords[]> {
    return this.afs.doc<MapCoords>(`tracking/${coordsUrl}`)
    .valueChanges()
    .pipe(
      map(data => {
        console.log(data.way)
        const array = data.way
        return [...array]
      })
    );
  }
>>>>>>> d411eb0... added tracking
}