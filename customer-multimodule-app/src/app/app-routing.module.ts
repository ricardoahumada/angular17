import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    // path: 'customers', loadChildren: () => CustomersModule // eager
    path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule) // lazy
  }
  ,
  {
    // path: 'orders', loadChildren: () => OrdersModule // eager
    path: 'orders', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule) // lazy

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
