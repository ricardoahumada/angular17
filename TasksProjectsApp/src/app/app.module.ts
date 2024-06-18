import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayDirective } from './directives/delay.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { AuxiliarModule } from './modules/auxiliar/auxiliar.module';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './structure/header/header.component';
import { CustomCardComponent } from './utils/custom-card/custom-card.component';
import { RateComponent } from './utils/rate/rate.component';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';
import { ConsumerComponent } from './observables/consumer/consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    RateComponent,
    DelayDirective,
    HeaderComponent,
    ProjectDetailComponent,
    ProjectTasksComponent,
    ProjectMembersComponent,
    NewProjectComponent,
    SignInComponent,
    CustomCardComponent,
    ContainerForDynamicComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuxiliarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
