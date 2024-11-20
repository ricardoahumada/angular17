import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { MyLibModService } from 'my-lib-mod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'customer-app';

  constructor(private _sharedserv: SharedService, 
    private _sharedLibServ: MyLibModService){
  }

  ngOnInit(): void {
    console.log('Share service in main...', this._sharedserv.sayHello('ric'));
    console.log('Share service from lib in main...', this._sharedLibServ.sayHello('ric'));
  }
}
