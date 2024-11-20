import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  // {path:'customers', loadChildren: ()=> CustomersModule},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

  { path: 'orders', loadChildren: () => OrdersModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
