import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  	title: string = 'miniature-rumor-db';

    constructor (
      private authService: AuthService,
      private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
      // grab the token from the url if it exists
      const url: string = window.location.href;
      const authTokenIndex: number = url.indexOf('#id_token');
      if (authTokenIndex === -1) {
        return this.authService.login()
      }
      const tokenString = url.slice(authTokenIndex);
      this.authService.login(tokenString);
    }
}
