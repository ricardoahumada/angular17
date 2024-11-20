import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {path:'customers', loadChildren: ()=> CustomersModule},
  {path:'orders', loadChildren: ()=> OrdersModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
