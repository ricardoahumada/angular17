import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {

  constructor(private _orderSrv: OrderService) { }

  orders = '';

  ngOnInit(): void {
    this.orders = this._orderSrv.getOrdersFromApi();
  }

}
