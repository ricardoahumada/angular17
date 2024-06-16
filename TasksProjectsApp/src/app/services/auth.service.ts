import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private session: SessionService) { }

  public isSignedIn() {
    // return !!this.session.accessToken;
    return !!this.session.getToken();
  }

  public doSignOut() {
    this.session.destroy();
  }

  public doSignIn(accessToken: string) {
    // this.session.accessToken = accessToken;
    this.session.storeToken(accessToken);
  }
}
