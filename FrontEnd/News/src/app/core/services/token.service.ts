import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {

  getToken(): String {
    return window.localStorage['userToken'];
  }

  saveToken(token: String) {
    window.localStorage['userToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('userToken');
  }

}
