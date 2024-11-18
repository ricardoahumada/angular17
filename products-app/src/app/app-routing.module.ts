import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CommentsComponent } from './product/product-detail/comments/comments.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component.';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NotFoundComponent } from './util/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:code',
    component: ProductDetailComponent,
    children: [
      { path: '', redirectTo: 'comments', pathMatch: 'full' },
      { path: 'comments', component: CommentsComponent },
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
