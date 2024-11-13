import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './utils/delete/delete.component';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { DelayDirective } from './directives/delay.directive';
import { FormatFrameDirective } from './directives/format-frame.directive';
import { ProjectsService } from './services/projects.service';
import { NotFoundComponent } from './utils/delete/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent,
    FilterElementsPipe,
    FormatFrameDirective,
    TaskDetailComponent,
    ProjectDetailComponent,
    ProjectTasksComponent,
    ProjectMembersComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    DeleteComponent,
    DelayDirective,
    NotFoundComponent,
    AppRoutingModule,
  ],
  providers: [/* ProjectsService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
