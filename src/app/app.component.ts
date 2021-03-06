import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(public checkAdmin: AuthService) {  }
  ngOnInit() {
    this.checkAdmin.getAdminsUids()
  }
}
