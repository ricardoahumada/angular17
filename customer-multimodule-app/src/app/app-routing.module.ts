import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => CustomersModule, // eager
    // loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule), // lazy
  },
  {
    path: 'orders',
    loadChildren: () => OrdersModule, // eager
    // loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule), // lazy
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
