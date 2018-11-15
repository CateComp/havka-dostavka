import { Component, OnInit} from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public user: AuthService) { }

  public ngOnInit() {

  }
}
