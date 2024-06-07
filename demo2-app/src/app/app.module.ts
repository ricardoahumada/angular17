import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hola/hello/hello.component';
import { RateComponent } from './util/rate/rate.component';
import { FiltraDatosPipe } from './pipes/filtra-datos.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReplicateDirective } from './directives/replicate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RateComponent,
    FiltraDatosPipe,
    HighlightDirective,
    ReplicateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
