import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HeaderComponent } from './structure/header/header.component';
import { DeleteComponent } from './utils/delete/delete.component';
import { NameEditorComponent } from './utils/name-editor/name-editor.component';
import { FormsModule } from '@angular/forms';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { DelayDirective } from './directives/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ProjectsListComponent,
    DeleteComponent,
    FilterElementsPipe,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    NameEditorComponent,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
