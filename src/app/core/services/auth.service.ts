import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = this.afAuth.authState.pipe(
    map(authState => {
      if(!authState) {
        return null;
      } else {
        return authState
      }
    })
  )
 
  constructor(public afAuth: AngularFireAuth) {  }
  
  signInWithFacebook() {
    this.afAuth.auth.signInWithPopup(
      new auth.FacebookAuthProvider()
    )
  }
  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}