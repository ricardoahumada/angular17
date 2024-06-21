import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports:[
    OrderListComponent
  ]
})
export class OrdersModule { }
