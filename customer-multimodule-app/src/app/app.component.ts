import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'customer-app';

  constructor(private _myLibSrv: MyLibService) {
  }

  ngOnInit(): void {
    this._myLibSrv.sayHello();
  }
}
