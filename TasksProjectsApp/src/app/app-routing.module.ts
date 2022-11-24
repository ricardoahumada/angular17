import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { TasksResolver } from './guards/tasks.resolver';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {
    path: 'tasks',
    component: TasksListComponent,
    /* canActivate: [CanActivateGuard], */ /* resolve: { tasks: TasksResolver }, */
  },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:tid', component: TaskDetailComponent },
  {
    path: 'projects',
    component: ProjectsListComponent /* canActivate: [CanActivateGuard] */,
  },
  { path: 'projects/new', component: NewProjectComponent },
  {
    path: 'projects/:pid',
    component: ProjectDetailComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent },
      { path: 'members', component: ProjectMembersComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
