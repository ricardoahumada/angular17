import { NgModule } from '@angular/core';
import { HelloComponent } from './hola/hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Hello2Component } from './hola/hello2/hello2.component';
import { NotfoundComponent } from './utils/notfound/notfound.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CommentsComponent } from './product/product-detail/comments/comments.component';
import { ImagesComponent } from './product/product-detail/images/images.component';
import { NewUserComponent } from './users/new-user/new-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { path: 'hello', component: HelloComponent },
    { path: 'hello2', component: Hello2Component },
    { path: 'products', component: ProductListComponent },
    {
        path: 'products/:code', component: ProductDetailComponent,
        children: [
            { path: '', redirectTo: 'features', pathMatch: 'full' },
            { path: 'comments', component: CommentsComponent },
            { path: 'images', component: ImagesComponent },
        ]
    },
    { path: 'users/new', component: NewUserComponent },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }