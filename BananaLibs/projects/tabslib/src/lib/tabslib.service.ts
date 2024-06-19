import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabslibService {

  constructor() { }

  private _names: string[] = [];

  private $codeSub = new BehaviorSubject<string[]>(this._names);

  getCodes(): Observable<string[]> {
    console.log('TabslibService.getCodes');
    
    return this.$codeSub;
  }

  load(name: string): void {
    console.log('TabslibService.load:', name);
    this._names.push(name);
    this.$codeSub.next(this._names);
  }

  loadWithCallBack(loader: any): void {
    console.log('TabslibService.load:', loader);
    loader();
  }

}
