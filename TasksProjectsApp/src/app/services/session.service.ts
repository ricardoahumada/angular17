import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public accessToken: string | null = null;

  constructor() {}

  public destroy(): void {
    this.accessToken = null;
  }
}
