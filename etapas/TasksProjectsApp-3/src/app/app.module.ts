import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './utils/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    DeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
