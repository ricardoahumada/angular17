import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { DetailProductsComponent } from './products/detail-products/detail-products.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { D1Component } from './products/detail-products/d1/d1.component';
import { D2Component } from './products/detail-products/d2/d2.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  {
    path: 'products/:pid', component: DetailProductsComponent,
    children: [
      { path: '', redirectTo: 'd1', pathMatch: 'full' },
      { path: 'd1', component: D1Component },
      { path: 'd2', component: D2Component }
    ]
  },
  { path: 'orders', component: ListOrdersComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
