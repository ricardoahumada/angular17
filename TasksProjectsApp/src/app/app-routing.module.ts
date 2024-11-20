import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewTaskSgnComponent } from './tasks/new-task-sgn/new-task-sgn.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NotFoundComponent } from './utils/delete/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent, },
  { path: 'tasks', component: TaskListComponent, /* canActivate: [CanActivateGuard], resolve: { tasks: TasksResolver } */ },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/new-sgn', component: NewTaskSgnComponent },
  { path: 'tasks/:tid', component: TaskDetailComponent },
  {
    path: 'projects', component: ProjectListComponent, canActivate: [CanActivateGuard]
  },
  { path: 'projects/new', component: NewProjectComponent },
  {
    path: 'projects/:pid', component: ProjectDetailComponent,
    canActivateChild: [CanActivateGuard],
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent },
      { path: 'members', component: ProjectMembersComponent },
    ],
  },
  { path: 'dynamic', component: ContainerForDynamicComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
