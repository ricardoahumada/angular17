import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
