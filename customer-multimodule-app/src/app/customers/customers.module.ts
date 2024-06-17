import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OrdersModule } from '../orders/orders.module';


@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    OrdersModule
  ],
  exports: [CustomerListComponent]
})
export class CustomersModule { }
