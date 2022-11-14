import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { NewUserComponent } from './user/new-user/new-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  {
    path: 'products/:code',
    component: ProductDetailComponent,
    children: [
      { path: '', redirectTo: 'features', pathMatch: 'full'  },
      { path: 'features', component: NotFoundComponent },
      { path: 'images', component: NotFoundComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
