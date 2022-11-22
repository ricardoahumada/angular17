import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { RateComponentComponent } from './utils/rate-component/rate-component.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './product/product-detail/comments/comments.component';
import { ImagesComponent } from './product/product-detail/images/images.component';
import { NewUserComponent } from './users/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RateComponentComponent,
    FilterProductsPipe,
    HighlightDirective,
    ReplicateDirective,
    NotFoundComponent,
    ProductDetailComponent,
    DashboardComponent,
    CommentsComponent,
    ImagesComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
