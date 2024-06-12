import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayDirective } from './directives/delay.directive';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { RateComponent } from './utils/rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ProjectListComponent,
    RateComponent,
    DeleteComponent,
    FilterElementsPipe,
    DelayDirective,
    HeaderComponent,
    TaskDetailComponent,
    ProjectDetailComponent,
    ProjectTasksComponent,
    NewProjectComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
