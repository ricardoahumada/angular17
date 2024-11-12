import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MiComponentComponent } from './util/mi-component/mi-component.component';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './util/rate/rate.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { ProductService } from './services/product.service';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { NewUserComponent } from './user/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ReplicateDirective,
    ListOrdersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    MiComponentComponent,
    FormsModule,
    RateComponent,
    FilterProductsPipe,
    HighlightDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
