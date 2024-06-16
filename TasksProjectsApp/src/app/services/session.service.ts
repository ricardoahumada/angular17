import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _accessToken: string | null = null;

  constructor() { }


  public storeToken(token: string): void {
    this._accessToken = token;
  }

  public destroy(): void {
    this._accessToken = null;
  }

  public getToken(): string | null {
    return this._accessToken;
  }
}
