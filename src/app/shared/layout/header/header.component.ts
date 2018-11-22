import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public user: AuthService,
    public router: Router
    ) { }

  public ngOnInit() {
  }
  public goHome() {
    this.router.navigate(['/home'])
  }
}
