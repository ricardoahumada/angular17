import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabslibService {

  constructor() { }

  private _names: string[] = [];
  private _tabs: any[] = [];

  private $namesSub = new BehaviorSubject<string[]>(this._names);
  private $tabSub = new BehaviorSubject<any[]>(this._tabs);

  getCodes(): Observable<string[]> {
    console.log('TabslibService.getCodes');
    return this.$namesSub;
  }

  getTabs(): Observable<any[]> {
    console.log('TabslibService.getTabs');
    return this.$tabSub;
  }


  load(name: string, loader: any): void {
    console.log('TabslibService.load');
    this._names.push(name);
    this.$namesSub.next(this._names);

    loader().then(
      (component: any) => {
        console.log('loaded:', component);
        if (component[name]) {
          this._tabs.push(component[name]);
          this.$tabSub.next(this._tabs);
        }
      }
    );
  }

}
