import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private _mylibSrv:MyLibService) {

  }

  ngOnInit(): void {
    this._mylibSrv.sayHello();
  }

  title = 'Customer-multimodule-app';
}
