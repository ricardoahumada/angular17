import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public token: string = '';
  public name: string = '';

  constructor() {}

  public destroy(): void {
    this.token = '';
    this.name = '';
  }
}

