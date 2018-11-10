import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth) { this.user = afAuth.authState;}
  
  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new auth.FacebookAuthProvider()
    )
  }
  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider())
  }
  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
    return this.afAuth.auth.signOut();
  }
}