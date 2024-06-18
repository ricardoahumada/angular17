import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayDirective } from './directives/delay.directive';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';
import { FeatureFlagsService } from './feature-flags/feature-flags.service';
import { LangMenuComponent } from './i18n/lang-menu/lang-menu.component';
import { TranslateService } from './i18n/translate.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './structure/header/header.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { PreviewTaskComponent } from './tasks/preview-task/preview-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { CustomCardComponent } from './utils/custom-card/custom-card.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { NameEditorComponent } from './utils/name-editor/name-editor.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('en');
}
const featureFactory = (featureFlagsService: FeatureFlagsService) => () =>
  featureFlagsService.loadConfig();

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
    LangMenuComponent,
    PreviewTaskComponent,
    CustomCardComponent,
    ContainerForDynamicComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
    /* {
      provide: APP_INITIALIZER,
      useFactory: featureFactory,
      deps: [FeatureFlagsService],
      multi: true,
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
