import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
import { FirebaseService } from 'app/core/services/firebase.service';

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
  public admins: any[];
  public isAdmin;
  constructor(
    public afAuth: AngularFireAuth,
    public fb: FirebaseService
    ) {  }
  public signInWithFacebook(): void {
    this.afAuth.auth.signInWithPopup(
      new auth.FacebookAuthProvider()
    );
  }
  public signInWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
  }
  public logout(): void {
    this.afAuth.auth.signOut();
  }
  public getAdminsUids() {
    this.fb.getAdminsUids()
    .subscribe((data) => {
      console.log(data)
      this.admins = data
      this.isAdmin = this.afAuth.authState.pipe(
        map(authState => {
          if (!authState || !this.admins.includes(authState.uid)){
            return null
          } else {
            return authState
          }
        })
      )
    })
  }
}