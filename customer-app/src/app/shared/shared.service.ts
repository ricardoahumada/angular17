import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */
export class SharedService {

  constructor() { }

  sayHello(name: string) {
    return `Hola ${name}`;
  }
}
