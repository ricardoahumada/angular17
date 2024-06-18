import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { PreviewTaskComponent } from './preview-task/preview-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarModule } from '../auxiliar/auxiliar.module';


@NgModule({
  declarations: [
    TaskListComponent,
    PreviewTaskComponent,
    TaskDetailComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuxiliarModule
  ]
})
export class TareasModule { }
