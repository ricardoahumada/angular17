import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MiComponentComponent } from './util/mi-component/mi-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    MiComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
