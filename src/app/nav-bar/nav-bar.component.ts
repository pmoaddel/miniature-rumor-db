import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  signInUrl: string = 'https://mini-rumors.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=21rllokg0ss3af5enchhmoqcnn&redirect_uri=https://mini-rumors.com/';

  constructor() { }

  ngOnInit() {
  }

}
