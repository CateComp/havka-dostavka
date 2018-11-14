import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Dish } from 'app/core/interfaces/dish';
import { AboutUs } from 'app/core/interfaces/about-us';
import { News } from 'app/core/interfaces/news';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {  }

  getItems(): Observable<Dish[]> {
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

  onUpload(file) {
    let database = firebase.database()
    let storage = firebase.storage();

    let buildenavn = storage.ref("images-mocks/" + new Date());
    buildenavn.put(file);

    let builderurler = database.ref("builderurler")
  }

  addDish(dish: Dish): void {
    console.log('Adding the dishes...');

    this.afs.collection<Dish>('menu')
    .add(dish)
    .then((docRef) => console.log('Dish added with id: ', docRef.id))
    .catch(error => console.log('Error adding the dish: ', error));
  }

  getAboutUs(): Observable<AboutUs[]> {
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

  getNews(): Observable<News[]> {
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
}
