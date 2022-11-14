import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { StarsComponent } from './util/stars/stars.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { GteValidatorDirective } from './directives/gte-validator.directive';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    StarsComponent,
    FilterProductsPipe,
    HighlightDirective,
    ReplicateDirective,
    NotFoundComponent,
    DashboardComponent,
    ProductDetailComponent,
    NewProductComponent,
    NewUserComponent,
    GteValidatorDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
