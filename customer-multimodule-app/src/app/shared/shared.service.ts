import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root',} // comment when using forRoot()
)
export class SharedService {
  constructor() {}

  value: string = '';

  setHello(val: string) {
    this.value = val;
  }

  sayHello() {
    console.log('Using sayHello from Shared Module...');
    return this.value;
  }
}
