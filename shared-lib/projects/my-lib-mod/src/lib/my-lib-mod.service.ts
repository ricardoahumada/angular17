import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibModService {

  constructor() { }

  sayHello(name:string){
    return `Hola, ${name}!`;
  }
}
