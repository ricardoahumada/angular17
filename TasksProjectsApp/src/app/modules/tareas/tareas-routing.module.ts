import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksResolver } from './resolvers/tasks.resolver';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    // canActivate: [CanActivateGuardGuard],
    resolve: { tasks: TasksResolver }
  },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:tid', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
