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

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent,
    FilterElementsPipe,
    FormatFrameDirective
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    DeleteComponent,
    DelayDirective
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
