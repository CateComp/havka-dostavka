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
  public admins: any[] = ['UU6RfkCmVhc74K3p5hML3MonPVq1', 'QIiRirBfnOeHSv4sk5ujNReT5hf2', 'UEEmYwhUy4XXcVKpDSD9o5629t22', 'CXZCea7MMjgs6vVLJc4cOZFPy6E3'];
  public isAdmin = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState || !this.admins.includes(authState.uid)){
        return null
      } else {
        return authState
      }
    })
  )
  constructor(public afAuth: AngularFireAuth) {  }
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
}