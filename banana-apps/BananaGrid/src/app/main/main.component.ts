import { Component, OnInit } from '@angular/core';
import { TabslibService } from 'tabslib';
// import {} from '../modules/orders/order-list/order-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private _tabsSrv: TabslibService) { }

  ngOnInit(): void {
  }

  showOrders() {
    this._tabsSrv.load('OrderListComponent',
      () => {
        const aModule = import('../modules/orders/order-list/order-list.component');
        console.log('aModule:', aModule);
        return aModule;
      }
    );

  }

}
