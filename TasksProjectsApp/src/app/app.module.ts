import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { RateComponent } from './utils/rate/rate.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { DelayDirective } from './directives/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ProjectListComponent,
    RateComponent,
    DeleteComponent,
    FilterElementsPipe,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
