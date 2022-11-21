import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { FeaturesComponent } from './product/product-detail/features/features.component';
import { ImagesComponent } from './product/product-detail/images/images.component';
import { PoliticianComponent } from './examples/components/politician/politician.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  {
    path: 'products/:code',
    component: ProductDetailComponent,
    children: [
      { path: '', redirectTo: 'features', pathMatch: 'full'  },
      { path: 'features', component: FeaturesComponent },
      { path: 'images', component: ImagesComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: 'quotes', component: PoliticianComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}