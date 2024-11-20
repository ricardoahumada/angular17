import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayDirective } from './directives/delay.directive';
import { FormatFrameDirective } from './directives/format-frame.directive';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './structure/header/header.component';
import { NewTaskSgnComponent } from './tasks/new-task-sgn/new-task-sgn.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { PreviewTaskComponent } from './tasks/preview-task/preview-task.component';
import { TaskDetailForPreviewComponent } from './tasks/task-detail-for-preview/task-detail.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { CustomCardComponent } from './utils/delete/custom-card/custom-card.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { NotFoundComponent } from './utils/delete/not-found/not-found.component';

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
    TaskDetailForPreviewComponent,
    NewProjectComponent,
    NewTaskComponent,
    NewTaskSgnComponent,
    PreviewTaskComponent,
    SignInComponent,
    ContainerForDynamicComponent,
    CustomCardComponent
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
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
