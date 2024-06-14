import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _accessToken: string | null = null;

  constructor() { }


  public storeToken(token: string): void {
    this._accessToken = token;
    localStorage.setItem('token', this._accessToken);
  }

  public destroy(): void {
    this._accessToken = null;
  }

  public getToken(): string | null {
    return this._accessToken;
  }
}
