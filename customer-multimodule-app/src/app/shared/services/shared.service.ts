import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public sayHello(texto: string): string {
    return `Hello  ${texto}!`;
  }
}
