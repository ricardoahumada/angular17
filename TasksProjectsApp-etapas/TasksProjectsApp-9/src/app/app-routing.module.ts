import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './utils/delete/not-found/not-found.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { NewTaskSgnComponent } from './tasks/new-task-sgn/new-task-sgn.component';
import { SSEComponent } from './sse/sse/sse.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { TasksResolver } from './resolvers/tasks.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'tasks', component: TaskListComponent, canActivate: [CanActivateGuard], resolve: { tasks: TasksResolver },},
  { path: 'tasks/new', component: NewTaskComponent, canActivate: [CanActivateGuard] },
  { path: 'tasks/new-sgn', component: NewTaskSgnComponent, canActivate: [CanActivateGuard] },
  { path: 'tasks/:tid', component: TaskDetailComponent, canActivate: [CanActivateGuard] },
  { path: 'projects', component: ProjectListComponent, canActivate: [CanActivateGuard] },
  { path: 'projects/new', component: NewProjectComponent, canActivate: [CanActivateGuard] },
  {
    path: 'projects/:pid', component: ProjectDetailComponent,
    canActivate: [CanActivateGuard],
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent },
      { path: 'members', component: ProjectMembersComponent },
    ],
  },
  { path: 'sse', component: SSEComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
