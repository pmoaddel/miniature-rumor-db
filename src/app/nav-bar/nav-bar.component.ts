import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  redirect_uri = {
    dev: 'http://localhost:4200/',
    prod: 'https://mini-rumors.com/'
  }
  signInUrl: string = `https://mini-rumors.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=21rllokg0ss3af5enchhmoqcnn&redirect_uri=${this.redirect_uri.dev}`;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
