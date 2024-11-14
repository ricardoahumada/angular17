import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MiComponentComponent } from './util/mi-component/mi-component.component';
import { EmailValidator, FormsModule } from '@angular/forms';
import { RateComponent } from './util/rate/rate.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { ProductService } from './services/product.service';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailProductsComponent } from './products/detail-products/detail-products.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { D1Component } from './products/detail-products/d1/d1.component';
import { D2Component } from './products/detail-products/d2/d2.component';

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
    D2Component
  ],
  imports: [
    BrowserModule,
    MiComponentComponent,
    FormsModule,
    RateComponent,
    FilterProductsPipe,
    HighlightDirective,
    AppRoutingModule,
    EmailValidator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
