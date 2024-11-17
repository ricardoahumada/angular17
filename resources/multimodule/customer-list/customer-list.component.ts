import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private _sharedSrv:SharedService) { }

  ngOnInit(): void {
    this._sharedSrv.setHello('Hello people!!');
    console.log(this._sharedSrv.sayHello());    
  }

}
