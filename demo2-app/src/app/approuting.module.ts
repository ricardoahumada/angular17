import { NgModule } from '@angular/core';
import { HelloComponent } from './hola/hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Hello2Component } from './hola/hello2/hello2.component';
import { NotfoundComponent } from './utils/notfound/notfound.component';

const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { path: 'hello', component: HelloComponent },
    { path: 'hello2', component: Hello2Component },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }