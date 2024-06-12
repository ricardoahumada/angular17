import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hola/hello/hello.component';
import { RateComponent } from './util/rate/rate.component';
import { FiltraDatosPipe } from './pipes/filtra-datos.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { AppRoutingModule } from './approuting.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { CommentsComponent } from './product/product-detail/comments/comments.component';
import { ImagesComponent } from './product/product-detail/images/images.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RateComponent,
    FiltraDatosPipe,
    HighlightDirective,
    ReplicateDirective,
    ProductListComponent,
    ProductDetailComponent,
    FilterProductsPipe,
    ProductDetailComponent,
    CommentsComponent,
    ImagesComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
