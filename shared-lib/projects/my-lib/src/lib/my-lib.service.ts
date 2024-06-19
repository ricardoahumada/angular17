import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  public sayHello(){
    console.log("Helllo from MyLibService!!!");
  }
}
