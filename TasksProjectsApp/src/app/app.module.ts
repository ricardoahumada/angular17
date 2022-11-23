import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { NameEditorComponent } from './utils/name-editor/name-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { DelayDirective } from './directives/delay.directive';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ProjectsListComponent,
    DeleteComponent,
    FilterElementsPipe,
    DelayDirective,
    NotFoundComponent,
    TaskDetailComponent,
    ProjectDetailComponent,
    ProjectTasksComponent,
    ProjectMembersComponent,
    NewProjectComponent,
    NewTaskComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    NameEditorComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
