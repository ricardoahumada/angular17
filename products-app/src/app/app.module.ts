import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { D1Component } from './products/detail-products/d1/d1.component';
import { D2Component } from './products/detail-products/d2/d2.component';
import { DetailProductsComponent } from './products/detail-products/detail-products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { MiComponentComponent } from './util/mi-component/mi-component.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { RateComponent } from './util/rate/rate.component';
import { ProductsListHttpComponent } from './products/productshttp-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ReplicateDirective,
    ListOrdersComponent,
    NewUserComponent,
    DetailProductsComponent,
    NotFoundComponent,
    D1Component,
    D2Component,
    ProductsListHttpComponent
  ],
  imports: [
    BrowserModule,
    MiComponentComponent,
    FormsModule,
    RateComponent,
    FilterProductsPipe,
    HighlightDirective,
    AppRoutingModule,
    EmailvalidatorDirective,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
