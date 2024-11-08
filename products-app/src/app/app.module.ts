import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MiComponentComponent } from './util/mi-component/mi-component.component';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './util/rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    MiComponentComponent,
    FormsModule,
    RateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
