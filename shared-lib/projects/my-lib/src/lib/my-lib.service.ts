import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }


  sayHello(){
    console.log('MyLibService hello!!');
  }

}
