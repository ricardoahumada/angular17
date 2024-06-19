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

  rowData: any[] = [];
  columnDefs: any[] = [
    { headerName: "Key", field: "key" },
    { headerName: "Sku", field: "sku", filter: true },
    { headerName: "Line Number", field: "linenumber" },
    { headerName: "Manufacturer sku", field: "manufacturersku", filter: true },
    { headerName: "Pack", field: "packkey" },
    { headerName: "Q. Ordered", field: "qtyordered", },
    { headerName: "Q. Received.", field: "qtyreceived" },
    { headerName: "Storer", field: "storerkey" },
    { headerName: "Notes", field: "notes" },
  ];

  defaultColDef: any = {
    sortable: true,
    filter: true,
  };;

  ngOnInit(): void {
    this._orderSrv.getOrdersFromApi().subscribe(data => {
      this.rowData = data;
    });
  }

}
