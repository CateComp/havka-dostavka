import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: any;
  public userName: string;
  constructor(public authService: AuthService) { }
    
  public ngOnInit() {
      
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        console.log(res)
        // res.user = res
        console.log(res.user)
      })
    .catch((err) => console.log(err));
  }
  signInWithGoogle() {
    let _this = this; 
    this.authService.signInWithGoogle()
    .then((res) => {
      _this.user = res.user
        console.log(res.user.displayName)
      })
    .catch((err) => console.log(err));
  }
  isLoggedIn(){
    this.authService.isLoggedIn()

  }
  logout() {
    this.authService.logout()
  }
}
