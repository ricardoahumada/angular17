import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NewTaskSgnComponent } from './tasks/new-task-sgn/new-task-sgn.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
    ProjectMembersComponent,
    NewProjectComponent,
    NewTaskComponent,
    NewTaskSgnComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    DeleteComponent,
    DelayDirective,
    NotFoundComponent,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
