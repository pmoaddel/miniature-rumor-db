import { Injectable } from '@angular/core';

const AUTH_STORAGE_KEY = 'mini_db_auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  _rawAuthenticationData: any;
  isLoggedIn: boolean = false;
  userName: string;
  accessToken: string;

  login(encodedAuthInfo) {
    const authenticationData = encodedAuthInfo ? this.decodeAuthInfo(encodedAuthInfo) : JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    if (!authenticationData) {
      return
    }
    this.isLoggedIn = true;
    this._rawAuthenticationData = authenticationData;
    this.userName = authenticationData.payload['cognito:username'];
    this.accessToken = authenticationData.access_token;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticationData));
  }

  decodeAuthInfo(token: string) {
    const params = token.split('&');
    let authenticationData = {};
    params.forEach((param) => {
      const [key, value] = param.split('=');
      if (key === 'access_token') {
        let [header, payload, signature] = value.split('.');
      }
      if (key !== '#id_token') {
        authenticationData[key] = value
        return;
      }
      let [jose_header, payload, signature] = value.split('.');
      authenticationData.jose_header = JSON.parse(atob(jose_header));
      authenticationData.payload = JSON.parse(atob(payload));
      authenticationData.singature = signature
    });
    return authenticationData;
  }

  logout() {
    this.isLoggedIn = false;
    delete this.userName;
    delete this.accessToken;
    delete this._rawAuthenticationData;
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
