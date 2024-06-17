import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  exports: [CustomerListComponent]
})
export class CustomersModule { }
