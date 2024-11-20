import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'customer-app';

  constructor(private _sharedserv: SharedService){

  }

  ngOnInit(): void {
    console.log('Share service in main...', this._sharedserv.sayHello('ric'));
  }
}
