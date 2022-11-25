import { Injectable } from '@angular/core';

@Injectable(/* {
  providedIn: 'root',
} */)
export class SharedService {
  constructor() {}

  value: string = '';

  setHello(val: string) {
    this.value = val;
  }

  sayHello() {
    return this.value;
  }
}
