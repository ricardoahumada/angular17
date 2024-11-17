import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayDirective } from './directives/delay.directive';
import { FormatFrameDirective } from './directives/format-frame.directive';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsService } from './services/projects.service';
import { HeaderComponent } from './structure/header/header.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
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
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
