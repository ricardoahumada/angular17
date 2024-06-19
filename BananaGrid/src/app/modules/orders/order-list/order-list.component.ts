import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {

  constructor(private _orderSrv: OrderService) { }

  orders: Order[] = [];

  rowData: any[] = [];
  columnDefs: any[] = [];
  defaultColDef: any;

  ngOnInit(): void {
    this._orderSrv.getOrdersFromApi().subscribe(data => {
      this.orders = data;

      this.rowData = [
        { name: "Task 1", start_date: "2023-05-29 06:00:00", end_date: "2023-06-20 06:00:00" },
        { name: "Task 2", start_date: "2023-05-30 06:00:00", end_date: "2023-06-21 06:00:00" },
        { name: "Task 3", start_date: "2023-05-31 06:00:00", end_date: "2023-06-22 06:00:00" },
        // Add more data as needed
      ];

      this.columnDefs = [
        { headerName: "Task Name", field: "name", filter: true, floatingFilter: true },
        { headerName: "Start Date", field: "start_date" },
        { headerName: "End Date", field: "end_date" },
        // Add more columns as needed
      ];

      this.defaultColDef = {
        sortable: true,
        filter: true,
      };

    });
  }

}
