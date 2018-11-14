import { Component } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public user: AuthService) { }
}