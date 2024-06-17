import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private _sharedSrv: SharedService) { }

  ngOnInit(): void {
    const val = this._sharedSrv.sayHello('CustomerListComponent');
    console.log(val);
    
  }

}
