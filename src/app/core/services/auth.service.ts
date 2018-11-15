import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {

        return null;
      } else {

        return authState;
      }
    })
  );
  constructor(public afAuth: AngularFireAuth) {  }
  public signInWithFacebook(): void {
    this.afAuth.auth.signInWithPopup(
      new auth.FacebookAuthProvider()
    );
  }
  public signInWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider());
  }
  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
