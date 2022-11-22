import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { RateComponentComponent } from './utils/rate-component/rate-component.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RateComponentComponent,
    FilterProductsPipe,
    HighlightDirective,
    ReplicateDirective
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
